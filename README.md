# velstart
JavaScript API for start page creation.

## Documentation
Velstart is incredibly easy to set up

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
        <div id="vel-search" vel-search-default="ecosia" vel-form-class="..." vel-button-class="..."></div>
        <script src="/path/to/velstart.js" defer></script>
    </body>
</html>
```
