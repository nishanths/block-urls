# Block URLs

Chrome extension to block URLs. 

<img src="http://i.imgur.com/eDO90jt.png" width=450>

## Install

1. [Download the latest version](https://github.com/nishanths/block-urls/releases/download/1.0/block-urls.crx).
2. Visit `chrome://extensions`.
3. Drag and drop the downloaded file into the window.

## Options

1. Visit `chrome://extensions`.
2. Click on Options under Block URLs.
3. Specify the URLs to block, one per line. For example:

  ```
  https://github.com/nishanths
  https://www.facebook.com
  https://example.com?q=onlythisquery
  ```
  
4. Hit Save to save changes. Settings will be synchronized across your Chrome sign-ins.
  
## URL matching rules

Only exact URL matches will be blocked. The query string and fragment, if
specified, will also need to match for blocking. The only exception is that
trailing slash does not matter if both query string and fragment are absent.

Thus, specifying `https://www.facebook.com` will block both
`https://www.facebook.com` and `https://www.facebook.com/`, but no other
`facebook.com` URL.

Further reading about [the parts of a
URL](https://www.mattcutts.com/blog/seo-glossary-url-definitions/).
  
## Disable

To disable blocking, either:

* Remove the URL from the options and hit Save 
* Remove or disable the extension
  
## License

MIT. Copyright © 2017 [Nishanth Shanmugham](https://github.com/nishanths).
