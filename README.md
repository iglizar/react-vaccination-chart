# Vaccination Calendar Component

This project contains a React component for displaying a dynamic vaccination calendar. The calendar displays information about vaccine types, recommended vaccination ranges, and vaccines already applied. The design is inspired by this [illustrative image](https://www.drugwatch.com/wp-content/uploads/Immunization-Infants-to-Preschool-Aged.png).

# Requirements for the test

We need a React component that can display a vaccination calendar, with dynamic information (type of vaccines, recommended vaccination ranges, vaccines already applied). Something similar to this https://www.drugwatch.com/wp-content/uploads/Immunization-Infants-to-Preschool-Aged.png (illustrative image).

# Criteria:

The data model in general is defined by you, taking into account that the existing entities are Vaccine (type of vaccine) and Vaccination (vaccination event).
The patient's date of birth will also be received.
The structure of the calendar/table is given by configuration, that is, they come as a decoupled parameter from the rest of the data: As seen in the image, the axes are a) the Age Ranges (arbitrary) for the columns, and b) Vaccine Types (Vaccine) for the rows. For each row comes id, name, recommendedAdministrations (Vaccine) The recommendedAdministrations are time ranges that suggest when the doses of each vaccine should be applied, you define what would be the convenient data structure considering that we have to use that data to locate the Vaccinations in the matrix.
On the other hand, N Vaccinations that were applied to the patient will be received as a list (Vaccine id and date).
It is important to consider that the data comes "raw", so any computation necessary to locate the data in its place must be done on the Frontend (the component must include that logic).

Required Stack:

Typescript
React
Semantic UI (https://react.semantic-ui.com/)

# Instructions for the component
1. The component will receive the patient's date of birth
2. The component will receive a list of N Vaccinations with the Vaccine id and date
3. The component will receive a configuration object with the age ranges and vaccine types
4. The component will display a vaccination calendar with the information of the vaccines applied and the recommended administrations
5. The component will include the logic to locate the Vaccinations in the matrix

# Configuration
The calendar's columns (age ranges) and the rows (types of vaccines) can be configured by passing props to the component. Adjust these according to your specific needs.

# Instructions for using the system
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the application
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser
