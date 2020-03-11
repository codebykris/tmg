# TMG Test Code

## TO-DO List:

* TO-DO: Potentially Introduce SASS (if approved by Tech Lead / Solutions Architect in true development scenario) to make use of BEM nesting / naming convention of components within styles, in our case the “Comments” component
* TO-DO: If using SASS, create variables file, for repeated brand guide colours, fonts, generic spacings and to create potential re-usable mixin functions, if ever necessary
* TO-DO: For AA Accessibility standard (screen readers for visually impaired etc.), implement all appropriate Aria attribute values within semantically ordered HTML element tags
* TO-DO: Write Unit tests to ensure full branch coverage of methods used within script(s), confirming output from functionality is correct and as expected in as many scenarios as possible
* TO-DO: In true dev env, ensure pipeline has End to End (e2e) testing in place, this will ensure end user interaction is a rich experience as expected, ultimately meeting acceptance criteria
* TO-DO: Run page through Google Lighthouse to discover any potential further performance/SEO optimisation opportunities
* TO-DO: Setup a CONSTANTS file, containing key/val pairs for repeatedly used generic strings such as error or warning messages, button labels, component headings etc.
* TO-DO: Potentially setup internationalisation (i18n) library / framework (possibly already an existing AEM feature), allowing for translation of strings by TG Editorial staff for international users/readers, into their native languages
* TO-DO: Potentially make use of Typescript as a way of stricter control over types within data structures, passed asynchronously  
* TO-DO: Remove any console logging and unneeded comments across all code
* TO-DO: Make request.js (Util) code dynamic (as opposed to static) to allow for other endpoint paths to be passed for API requests, bypassing the use of a constructor. Also utilise async/await prefix on methods invoked for Axios GET requests. NOTE: This Utility is not currently in use.
* TO-DO: Display appropriate messaging in Comments component if no comment data (or if an error) is returned from API request, such as “There are currently no comments on this post” etc.
* TO-DO: Re-name “Comments” component to “Comments Block” due to the introduction of Comment as a child / sub-component of Comments Block (at least stylistically)
* TO-DO: Write utility script file / method which returns user-friendly dates (as per design), argument expected would be a machine-readable date object which would be correctly formatted and returned
* TO-DO: Write method (invoked by click of “Newest” & “Likes” buttons) which sorts comment data array in descending order (by most recent date, in millisecond format since January 1, 1970, 00:00:00 UTC) and re-renders newly ordered comment elements to the DOM, equally the method should sort comments by most likes, then re-renders comments accordingly. Parameter should be received, conditionally allowing method to filter aptly and return re-ordered comment markup 
* TO-DO: BONUS - Add a data attribute to the filter buttons which reflects the type of filtering which has been applied allowing an inverse filter method to be invoked on subsequent click (possibly utilising EventTarget in unit tests). e.g. - upon first click, button text “Newest” becomes “Oldest” and upon second click the comments will be ordered in an ascending format, button text will also revert. Same would apply to Likes button, we can improve the UX with an arrow icon pointing up or down besides the button text “Likes”, reflecting the current ordering in place.
* TO-DO: Maintainability - Abstraction of component specific functionality within app.js, such code should live in a more component specific script file
* TO-DO: Future proofing - To improve performance, implement a “lazy loading” feature, should there ever be more than X amount of comments to load appropriate sets of comments (sets of 10, 20, 50 etc.) at a time which were retrieved from API endpoint JSON response obj
* TO-DO: Future proofing - Possible usage of data attributes for JS targeting instead of classes, as stylistic classes may be changed by sub-sequential development
* TO-DO: Setup mobile responsive CSS Grid in Header component. 
* TO-DO: Also, in general, tidy up any stylistic defects to match designs as pixel perfect as possible, via more accurate use of CSS Grid and use of any branded fonts or SVG icons as per design.
* TO-DO: If time permits, setup potential peer code review to ensure any further improvements which can be implemented are noted
* TO-DO: Final check before deployment, ensure all code is as terse, scalable / re-usable and DRY as possible