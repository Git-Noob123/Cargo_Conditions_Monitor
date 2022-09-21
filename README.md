# Cargo_Conditions_Monitor
A project that helps track temperature and humidity of cargos on trucks

# CentralServer:
The backend server that connects with Mongodb and handles all communications with overseer dashboard. Developed using Java and Spring Boot
Gradle Version: 7.5.1
Java Version: 18.0.2.1

# OverseerDashboard:
A front-end website that helps visualize all cargos' conditions for overseers. Developed using React.js

# Driver Dashboard:
Display a cargo's condition data on truck driver's screen. Developed using Qt5. Conditions are updated to Mongodb in real-time and the update part is developed using Python and flask
