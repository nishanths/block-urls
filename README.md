## Block URLs

Chrome extension to block URLs. 

## Installing

1. Download the latest version.
2. Visit `chrome://extensions`.
3. Drag and drop the downloaded file into the window.

To uninstall, click the trash icon.

## Options

1. Visit `chrome://extensions`.
2. Click on Options under Block URLs.
3. Specify the URLs to block, one per line. For example:

  ```
  https://github.com/nishanths
  https://facebook.com
  https://example.com?q=foo
  ```
  
  Only exact URL matches will be blocked. The query string and fragment, if specified, will also need to match for blocking. 
  
  The only exception is that trailing slash does not matter if both query string and fragment are absent. That is, `https://facebook.com` will block both `https://facebook.com` and `https://facebook.com/`.
  
4. Hit Save to save changes.
  
## Disable

To disable blocking, either:

* remove the URL from the options and hit Save 
* remove or disable the extension
  
## License

MIT. Copyright © 2017 [Nishanth Shanmugham](https://github.com/nishanths).