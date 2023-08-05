# Services

---
Service functions are responsible for creating an abstraction level between backend and frontend inner logic.

Each of the functions is responsible for exactly one CRUD operation.

One of the benefits of this layer is flexibility to conform to backend changes.  

For example if an interface changed in backend, we can add conversions here to prevent changes to all logic.