# Live Coding Challenge - Part 2

## Overview

Build a cascading multi-select filtering interface for countries and cities, along with a data table that reflects the selected filters.

## Requirements

### Filter Components

#### Country Multi-Select

- The country filter must be a multi-select dropdown.
- The dropdown must include:
  - A search input inside the dropdown to filter country options (case-insensitive).
  - A "Select All" option that selects all available countries.
- At least one country must be selected.
  - If no country is selected:
    - The city dropdown should be empty and disabled.
    - The data table should display no results.

#### City Multi-Select

- The city filter must also be a multi-select dropdown.
- The dropdown must include:
  - A search input inside the dropdown to filter city options (case-insensitive).
  - A "Select All" option that selects all currently available cities.
- Cities should only be displayed and selectable after a country is selected.
- When one or more countries are selected:
  - Only cities belonging to the selected countries should be available.
- If a selected country is removed:
  - Any cities belonging to that country should automatically be removed from the city selection.


### Data Table Behavior

- The table should update dynamically based on:
  - Selected countries
  - Selected cities
- If no country is selected, the table should show no rows.

## Data Structure

The application uses three JSON files located in `src/constants/`:

- `countries.json` - List of countries with code and name
- `cities.json` - List of cities with id, name, and countryCode
- `establishments.json` - List of establishments with id, name, countryCode, cityId, type, category, and specialty

