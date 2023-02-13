# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1 - DB changes to store the custom Id

> Origin Requirement

Add ability for the Facilities to store custom Ids for each Agent they work with.

> Description

The Facility shall be able to add a custom Id for the Agent when they allocate a shift. The new id shall be stored in the DB in the string format. A new table or collection shall be provisioned to store this infomation. The stored values include

1. FacilityId
2. AgentId
3. CustomId

The customId shall be fetched using the combined primary key with FacilityId and AgentId.

Proposed name for the table / colection: `AgentFacilityIds`

> Definition Of Done

1. The new table / collection shall be created along with the deployment of the code. This shall be achived through change scripts.
2. The documents shall be updated with new table / collection information.

> Estimated Story Points - 1


### Ticket 2 - Insert the new CustomId while creating the shift

> Origin Requirement

Add ability for the Facilities to store custom Ids for each Agent they work with.

> Description

The customId information shall be inserted to the `AgentFacilityIds` if the mapping between the Agent and facility doesn't already exists.

> Definition Of Done

1. A new customId assigned by the Facility shall be inserted to the `AgentFacilityIds` when a new shift is created, if the mapping between the Agent and facility doesn't already exists.
2. The code changes shall have 
    1. Unit Test
    2. Integration Tests
3. The code changes shall be peer reviewed.
4. The documents shall be updated with all architectural design decisions.
5. Multiple End to end test developer tests shall be done.

> Acceptance criterias

1. A new customId assigned by the Facility shall be inserted to the `AgentFacilityIds` when a new shift is created, if the mapping between the Agent and facility doesn't already exists.
2. if the mapping between the Agent and facility already exists, there shall not be any new customId inserion.

> Estimated Story Points - 3


### Ticket 3 - Read new cutomId to be included in the report

> Origin Requirement

Add ability for the Facilities to store custom Ids for each Agent they work with and use this Id in the report.

> Description

The `generateReport` function shall include the customId from the `AgentFacilityIds` to unqiuely identify the agents instead of the database Ids. To fulfill this requirement, it is mandatory to include the customId as part of the report for the facilities along with other shoft information.

> Definition Of Done

1. `generateReport` function shall have the changes to fetch the customIds from the `AgentFacilityIds` collection / table.
3. Unit tests shall be updated with this information
4. The code changes shall be peer reviewed.
5. The documents shall be updated with all architectural design decisions.
6. Multiple End to end test developer tests shall be done.


> Acceptance criterias

1. The generated PDF report shall have the correct customId instead of the database Ids.

> Estimated Story Points - 5


