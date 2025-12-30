const raw = document.getElementById("raw");
const encoded = document.getElementById("encoded");
const query = document.getElementById("query");
const statusEl = document.getElementById("status");

const encodeBtn = document.getElementById("encodeBtn");
const clearBtn = document.getElementById("clearBtn");
const copyEncodedBtn = document.getElementById("copyEncoded");
const copyQueryBtn = document.getElementById("copyQuery");

function setStatus(msg, isError = false) {
  statusEl.textContent = msg;
  statusEl.style.color = isError ? "#b22" : "#2b6";
}

function doEncode() {
  const input = (raw.value || "").trim();
  if (!input) {
    encoded.value = "";
    query.value = "";
    setStatus("Paste a URL first.", true);
    return;
  }

  // Validate-ish (allows non-http too, but nudges user)
  try {
    // If user pastes something missing protocol, URL() will throw.
    // We still encode it, but warn.
    new URL(input);
  } catch {
    // Still encode, but inform.
    setStatus("Encoded (note: input doesn’t look like a fully qualified URL).", true);
  }

  const out = encodeURIComponent(input);
  encoded.value = out;
  query.value = `?csv=${out}`;
  if (statusEl.textContent === "" || statusEl.style.color !== "rgb(178, 34, 34)") {
    setStatus("Encoded.");
  }
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    setStatus("Copied to clipboard.");
  } catch (e) {
    // Fallback: select + copy
    setStatus("Couldn’t access clipboard automatically. Select and copy manually.", true);
  }
}

encodeBtn.addEventListener("click", doEncode);

clearBtn.addEventListener("click", () => {
  raw.value = "";
  encoded.value = "";
  query.value = "";
  setStatus("");
  raw.focus();
});

raw.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    doEncode();
  }
});

copyEncodedBtn.addEventListener("click", () => {
  if (!encoded.value) return setStatus("Nothing to copy.", true);
  copyToClipboard(encoded.value);
});

copyQueryBtn.addEventListener("click", () => {
  if (!query.value) return setStatus("Nothing to copy.", true);
  copyToClipboard(query.value);
});

// Convenience: if user loads with ?u=... prefill
(() => {
  const u = new URL(window.location.href);
  const prefill = u.searchParams.get("u");
  if (prefill) {
    raw.value = prefill;
    doEncode();
  }
})();
