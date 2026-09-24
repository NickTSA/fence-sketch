# Fence Sketch

Fence layout sketches for client contracts. One page, no server, no sign-in.
Works with no signal once it has been opened.

## Putting it on GitHub Pages

You don't need the command line for any of this.

1. Go to **github.com/new**. Name it `fence-sketch`, leave it **Public**, tick
   nothing else, and click **Create repository**.
2. On the next screen click **uploading an existing file**.
3. Open this folder, select the files *inside* it and drag them in — not the
   folder itself, or everything lands one level too deep. Click
   **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment* set **Source** to
   *Deploy from a branch*, **Branch** to `main` and the folder to `/ (root)`.
   Click **Save**.
5. Wait a minute, then reload that Settings page. It will show the address,
   something like `https://YOURNAME.github.io/fence-sketch/`.

To update it later, drag the new files in through **Add file → Upload files**
— same names replace the old ones.

## When an update doesn't show up

The app keeps a copy of itself on each device so it works with no signal, so
right after an upload a device may still open the copy it already has. It
checks GitHub every time you switch back to it and swaps itself over within
a few seconds.

If one is stubborn, **tap the build date at the bottom of the tool panel**.
That throws away the stored copy and pulls down whatever is published now.
Your sketches are saved separately and are not touched.

## Putting it on your phone

Open the address in Safari (iPhone) or Chrome (Android), then use
**Share → Add to Home Screen**. It gets its own icon and opens without any
browser chrome, like an app.

Do your sketching in the icon version rather than the browser tab. iOS keeps
them as separate apps with separate saved data — and unlike a browser tab, a
home screen app's saved work isn't wiped after a week of not opening it.

## Working offline

Once the page has loaded once on a device, it stays on that device. No signal
at the job site is fine — drawing and **Export PDF** both work. When you do
have signal it quietly picks up whatever version is on GitHub.

## Where your work is saved

Sketches are saved in the browser on the device you drew them on. Nothing is
uploaded anywhere, which is why this can be a public repo without exposing any
client details — the repo holds the app, never the jobs.

The flip side: each address and each device keeps its own separate copy. A job
drawn on your phone won't appear on your Mac until you move it.

## Saving jobs as files

The folder button at the top has **Save job file**, **Open job** and **New job**.

- **Save job file** downloads the job as `Client - Address - Date.fence.json`.
  Keep these in a folder (iCloud Drive works on both phone and Mac) and open
  any of them later to carry on editing.
- **Open job** takes one of those files, *or a PDF exported from the app*:
  every exported PDF carries an editable copy of the sketch inside it (it
  shows as an attachment in Acrobat and Preview). A PDF that has been signed
  or re-saved by another app usually loses that copy, so keep your own
  export. Prices you hid from the client are left out of the PDF's copy.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole app, including the PDF library |
| `sw.js` | Keeps the app on the device for offline use |
| `manifest.webmanifest` | Name and icon for Add to Home Screen |
| `icon-192.png`, `icon-512.png` | App icons |
