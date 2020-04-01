# Block URLs

Firefox addon to block URLs. 

<img src="http://i.imgur.com/4HSPVSb.png" width=450>

## Install

1. [Download the latest version](https://raw.githubusercontent.com/nishanths/block-urls/master/web-ext-artifacts/block_urls-3.0-an+fx.xpi).
1. Open a new tab, then drag and drop the downloaded file into Firefox.

## Configuring URLs

1. Visit `about:addons`.
2. Click on Preferences under Block URLs.
3. Specify the URLs to block, one per line. For example:

  ```
  https://github.com/nishanths
  https://www.facebook.com
  https://example.com?q=onlythisquery
  ```
  
4. Hit the Save button.
  
## URL matching rules

Only exact URL matches will be blocked. The query string and fragment, if
specified, will also need to match for blocking. The only exception is that
leading slash in the path does not matter.

```
Specified                            Blocks
---------                            ------

https://www.facebook.com             https://www.facebook.com
                                     https://www.facebook.com/
                                     
https://www.facebook.com/            https://www.facebook.com
                                     https://www.facebook.com/
                                     
https://www.facebook.com?q=foo       https://www.facebook.com?q=foo
                                     https://www.facebook.com/?q=foo

```

Further reading about [the parts of a URL](https://www.mattcutts.com/blog/seo-glossary-url-definitions/).
  
## Disable

To disable blocking, either:

* Remove the URL from Preferences and hit Save 
* Remove or disable the extension
  
## License

MIT. Copyright © 2017 [Nishanth Shanmugham](https://github.com/nishanths).
