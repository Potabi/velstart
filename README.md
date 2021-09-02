# velstart
JavaScript API for start page creation.

## Documentation
Velstart is incredibly easy to set up

### VELTIME
Adding time functionality is quick and simple with Velstart.
1. Add the script to the bottom of your page. You have two options, the normal and minified versions.
  - Minified (**RECOMMENDED**): 
      ```html 
      <script src="https://cdn.jsdelivr.net/gh/PotabiFoundation/velstart@main/velstart.min.js" defer></script>
      ```
  - Normal:
      ```html 
      <script src="https://cdn.jsdelivr.net/gh/PotabiFoundation/velstart@main/velstart.js" defer></script>
      ```
     > Adding this to the bottom of the page, not the head, is very important, as it might not function otherwise.
2. Add the search box
   > NOTE: This may not follow your CSS perfectly, we are working on a solution with vel classes.
   
   - Add this line of HTML, and customize:
       ```html
       <div id="vel-time" vel-time-format="24h"></div>
       ```
       - Setting ID to "vel-time" makes it properly add the form information.
       - There are two functional time formats
          - Twelve hour (Set with `12h`)
          - Twenty-four hour (Set with `24h`)

### VELSEARCH
Adding search functionality to your website is simple with Velstart. 
1. Add the script to the bottom of your page. You have two options, the normal and minified versions.
  - Minified (**RECOMMENDED**): 
      ```html 
      <script src="https://cdn.jsdelivr.net/gh/PotabiFoundation/velstart@main/velstart.min.js" defer></script>
      ```
  - Normal:
      ```html 
      <script src="https://cdn.jsdelivr.net/gh/PotabiFoundation/velstart@main/velstart.js" defer></script>
      ```
     > Adding this to the bottom of the page, not the head, is very important, as it might not function otherwise.
2. Add the search box
   > NOTE: This may not follow your CSS perfectly, we are working on a solution with vel classes.
   
   - Add this line of HTML, and customize:
       ```html
       <div id="vel-search" vel-search-default="ecosia"></div>
       ```
       - Setting ID to "vel-search" makes it properly add the form information.
       - The `vel-search-default` attribute selects which search engine your start page uses. Search engine options are listed below. They are not case sensitive, but their proper development name will be in the parenthesis. Unless listed in the parenthesis, most search engines only have one name to add them by.
          - Ask (`ask`)
          - Bing (`bing`)
          - DuckDuckGo (`duckduckgo`)
          - Ecosia (`ecosia`)
          - Google (`google`)
          - Yahoo (`yahoo`)
          - Yandex (`yandex`)

### Example
Here is how a simple site using Velstart should look:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Start Page</title>
    </head>
    <body>
        <div id="vel-time" vel-time-format="24h"></div>
        <div id="vel-search" vel-search-default="ecosia" vel-dropdown-class="..." vel-form-class="..." vel-button-class="..."></div>
        <footer>
            <!-- Please read the extra license clause, and add this -->
            <p>Start page functionality from Velstart by The Potabi Foundation</p>
        </footer>
        <script src="https://cdn.jsdelivr.net/gh/PotabiFoundation/velstart@main/velstart.min.js" defer></script>
    </body>
</html>
```

## The Velstart Extra License Clause
We specifically have a small extra rule along the rest of the license for any implementation of Velstart. It's a small, but required. 
- Using Velstart for any form of start page requires the following statement \
  on the page using the software must include the following disclaimer in the \
  footer of the webpage document: \
  `Start page functionality from Velstart by The Potabi Foundation`
  
  We do not require links, just a simple text disclaimer in the footer and readable. Thank you for understanding. 
