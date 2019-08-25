#Cozio Portal
This is a prototype of the Cozio Portal. This portal contains the one-stop shop for end-users to be able to manage locations and menus of their brand.

## Location Management Module

This module gives ability to the end user to manage locations with the following features:

### Search Location

The search input has dynamic filtering of the list as you type.

### Sort Location

Allow to sort location by decending or ascending in alphabetical order, sort by live vs. not live.

### Manage Online/Offline of a location

User can turn online/offline of a location. There's also another option for the user to turn online/offline for all location.

## Menu Management (Version 2.0)

This module gives the ability to the end users to manage menu with the following features:

### Drag and Drop

Users can drag and drop menu items to reorder menu items within a menu section. User can also drag and drop menu items to move menu items between menu sections.

### Create, delete, edit menu items, modifiers, and menu sections

Users have the CRUD functions for menu sections, menu items, modifiers

## Development

### Initial setup

1. Install Node [Node](https://nodejs.org/en/)

Note: Latest version 12.4.0 is recommended, but no less than version 8.x

2. Clone GitHub repository and change to directory of cloned repository.

```
git clone https://github.com/artawood/menu-management-2.git cozio
cd menu-management
```

3. Install development dependencies.

```
npm install
```

### !important

Please be sure to include the following in the head tag in this order:

```
<!-- Semantic UI -->
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
/>
<!-- Bootstrap -->
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
<!-- Font Awesome -->
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
  integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
  crossorigin="anonymous"
/>
<!-- Google Font Roboto -->
<link
  href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900"
  rel="stylesheet"
/>

```

### Running Locally

```
npm start
```

Browser should automatically open. If not, open [http://localhost:3000](http://localhost:3000) to view it in the browser.
