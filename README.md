# Docs Explore — Chrome Extension

> Bring back Google Docs Explore with DuckDuckGo Instant Answer, fast fallback search, and one-click citations.

---

## Installation

1. **Unzip** this folder somewhere permanent on your machine (don't delete it after loading).
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the `docs-explore` folder.
5. The extension is now installed.

---

## Search architecture

1. Query goes to DuckDuckGo Instant Answer first (no key, no quota)
2. If an instant answer exists, show a summary card with source URL
3. If no instant answer exists, show one-click fallback engines (DDG/Google/Bing/Yahoo/Brave)

---

## Usage

| Action | How |
|--------|-----|
| Open sidebar | Click the 🔵 button in the bottom-right of any Docs page |
| Keyboard shortcut | `Ctrl + Shift + E` |
| Search | Type in the search box — DDG instant answer appears when available |
| Fallback | If no instant answer exists, use one-click engine buttons |
| Visit source | Click **Visit site** |
| Copy answer + focus doc | Click **Copy**, then paste at caret |
| Copy citation + focus doc | Click **Copy citation**, then paste at caret |
| Quick capture from web pages | Right-click selection/link → **Add to Google Docs (Explore)** |

---

## APA citation format

Citations are assembled client-side from DDG fields:

```
Author, A. (n.d.). Heading. AbstractSource. https://url Retrieved YYYY, Month Day.
```

Fields omitted gracefully when unavailable (author omitted when unknown; date defaults to `n.d.` with retrieval date).

---

## File structure

```
docs-explore/
├── manifest.json       Chrome extension manifest (MV3)
├── background.js       Service worker (context menu + send to Docs tab)
├── content.js          Injected into docs.google.com — creates sidebar iframe
├── content.css         Styles for the injected toggle button + iframe
├── sidebar.html        The search panel (loaded in an iframe)
├── sidebar.js          DDG calls, fallback engines, APA builder
├── sidebar.css         Sidebar UI styles
├── options.html        Settings page (search preference)
├── options.js
└── icons/
    ├── icon16.svg
    ├── icon48.svg
    └── icon128.svg
```

---

## Notes & limitations

- **Instant answers** come from DDG's `AbstractText` / `Answer` / `Definition` fields.
- **Author extraction** is best-effort from DDG heading and can be blank for non-person entities.
- **Citation insertion** is clipboard-first by design: click **Copy** or **Copy citation**, then paste with `Cmd+V` (macOS) or `Ctrl+V`.
- **Fallback engines** open external search tabs without API calls.

---

## Privacy

Searches are sent directly from your browser to `api.duckduckgo.com` for instant answers or to user-opened search pages via normal web URLs. No API key is required.
