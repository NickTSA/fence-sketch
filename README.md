# Fence Sketch

Fence layout sketches for client contracts. One page, no server, no sign-in.
Works with no signal once it has been opened.

## Putting it on GitHub Pages

You don't need the command line for any of this.

1. Go to **github.com/new**. Name it `fence-sketch`, leave it **Public**, tick
   nothing else, and click **Create repository**.
2. On the next screen click **uploading an existing file**.
3. Drag in everything from this folder — `index.html`, `sw.js`,
   `manifest.webmanifest`, both `icon-*.png` files and this README — then click
   **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment* set **Source** to
   *Deploy from a branch*, **Branch** to `main` and the folder to `/ (root)`.
   Click **Save**.
5. Wait a minute, then reload that Settings page. It will show the address,
   something like `https://YOURNAME.github.io/fence-sketch/`.

To update it later, open `index.html` in the repo, click the pencil icon,
delete the contents, paste in the new file and commit. Or drag the new file in
through **Add file → Upload files** — same name replaces the old one.

## Putting it on your phone

Open the address in Safari (iPhone) or Chrome (Android), then use
**Share → Add to Home Screen**. It gets its own icon and opens without any
browser chrome, like an app.

## Working offline

Once the page has loaded once on a device, it stays on that device. No signal
at the job site is fine — drawing and **Export PDF** both work. When you do
have signal it quietly picks up whatever version is on GitHub.

## Where your work is saved

Sketches are saved in the browser on the device you drew them on. Nothing is
uploaded anywhere, which is why this can be a public repo without exposing any
client details — the repo holds the app, never the jobs.

The flip side: each address and each device keeps its own separate copy. A job
drawn on your phone won't appear on your Mac, and jobs saved from a local copy
of the file won't appear here. To move a sketch between devices, export the PDF,
or draw it where you intend to keep it.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole app, including the PDF library |
| `sw.js` | Keeps the app on the device for offline use |
| `manifest.webmanifest` | Name and icon for Add to Home Screen |
| `icon-192.png`, `icon-512.png` | App icons |
