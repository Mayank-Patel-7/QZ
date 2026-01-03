import React, { useState } from 'react';
import { Download, FileText, CheckCircle } from 'lucide-react';

const QuestionSetsGenerator = () => {
  const [generated, setGenerated] = useState(false);

  // All 14 question sets
  const allSets = {
    set1: [
      // Unit I (7)
      { unit: "Unit I", q: "The automobile body is mainly used to", options: ['Transmit power', 'Support suspension', 'Carry passengers and goods', 'Reduce engine vibration'], answer: 2 },
      { unit: "Unit I", q: "The term wheelbase refers to", options: ['Distance between front wheels', 'Distance between rear wheels', 'Distance between front and rear axle', 'Width of vehicle'], answer: 2 },
      { unit: "Unit I", q: "Monocoque construction means", options: ['Separate chassis and body', 'Body and chassis are integrated', 'Frame-only construction', 'Tubular frame'], answer: 1 },
      { unit: "Unit I", q: "Most commonly used body material is", options: ['Aluminum', 'Steel', 'Plastic', 'Copper'], answer: 1 },
      { unit: "Unit I", q: "Streamlining reduces", options: ['Vehicle weight', 'Air resistance', 'Rolling resistance', 'Gradient resistance'], answer: 1 },
      { unit: "Unit I", q: "Rolling resistance is minimum on", options: ['Mud road', 'Gravel road', 'Concrete road', 'Sandy road'], answer: 2 },
      { unit: "Unit I", q: "Galvanization involves coating with", options: ['Copper', 'Zinc', 'Nickel', 'Aluminum'], answer: 1 },
      // Unit II (7)
      { unit: "Unit II", q: "Main drawback of carburetor is", options: ['High cost', 'Poor fuel distribution', 'Complex design', 'Heavy weight'], answer: 1 },
      { unit: "Unit II", q: "MPFI stands for", options: ['Mechanical Petrol Fuel Injection', 'Multi Point Fuel Injection', 'Manual Petrol Fuel Injection', 'Motor Petrol Fuel Injection'], answer: 1 },
      { unit: "Unit II", q: "CRDI stands for", options: ['Common Rail Direct Injection', 'Constant Rail Diesel Injection', 'Common Rotary Diesel Injection', 'Central Rail Diesel Injection'], answer: 0 },
      { unit: "Unit II", q: "EGR stands for", options: ['Exhaust Gas Recirculation', 'Engine Gas Regulation', 'Emission Gas Reduction', 'Exhaust Gas Reduction'], answer: 0 },
      { unit: "Unit II", q: "EV stands for", options: ['Engine Vehicle', 'Electric Vehicle', 'Energy Vehicle', 'Electronic Vehicle'], answer: 1 },
      { unit: "Unit II", q: "Most common EV battery is", options: ['Lead acid', 'Lithium-ion', 'Nickel cadmium', 'Zinc air'], answer: 1 },
      { unit: "Unit II", q: "BMS stands for", options: ['Battery Monitoring System', 'Battery Management System', 'Battery Mechanical System', 'Battery Measuring System'], answer: 1 },
      // Unit III (6)
      { unit: "Unit III", q: "Refrigeration is the process of", options: ['Heating a space', 'Removing heat from a space', 'Adding moisture', 'Increasing temperature'], answer: 1 },
      { unit: "Unit III", q: "Unit of refrigeration is", options: ['kW', 'Ton of refrigeration', 'Joule', 'Pascal'], answer: 1 },
      { unit: "Unit III", q: "Compressor increases", options: ['Temperature only', 'Pressure only', 'Pressure and temperature', 'Volume'], answer: 2 },
      { unit: "Unit III", q: "HVAC stands for", options: ['Heating Ventilation Air Conditioning', 'High Velocity Air Cooling', 'Heat Vent Air Control', 'Hydraulic Ventilation AC'], answer: 0 },
      { unit: "Unit III", q: "Comfortable cabin temperature is around", options: ['10–15°C', '18–25°C', '30–35°C', '40°C'], answer: 1 },
      { unit: "Unit III", q: "R12 was phased out due to", options: ['High cost', 'Ozone depletion', 'Low efficiency', 'Toxicity'], answer: 1 },
      // Unit IV (6)
      { unit: "Unit IV", q: "Purpose of keyless entry system is to", options: ['Start engine', 'Lock/unlock vehicle without key', 'Control headlights', 'Control windows'], answer: 1 },
      { unit: "Unit IV", q: "Park assist system uses", options: ['Temperature sensors', 'Ultrasonic sensors', 'Pressure sensors', 'Oxygen sensors'], answer: 1 },
      { unit: "Unit IV", q: "GPS stands for", options: ['Global Positioning System', 'General Positioning System', 'Global Path System', 'Ground Positioning System'], answer: 0 },
      { unit: "Unit IV", q: "Automatic headlight ON/OFF works based on", options: ['Speed sensor', 'Light sensor', 'Temperature sensor', 'Pressure sensor'], answer: 1 },
      { unit: "Unit IV", q: "Seat belt is a", options: ['Active safety device', 'Passive safety device', 'Control device', 'Warning device'], answer: 1 },
      { unit: "Unit IV", q: "ABS stands for", options: ['Automatic Brake System', 'Anti-lock Braking System', 'Advanced Brake System', 'Assisted Braking System'], answer: 1 },
      // Unit V (7)
      { unit: "Unit V", q: "Oxygen sensor is used to measure", options: ['Fuel quantity', 'Oxygen content in exhaust', 'Engine speed', 'Coolant temperature'], answer: 1 },
      { unit: "Unit V", q: "Oxygen sensor is mounted on", options: ['Intake manifold', 'Exhaust manifold', 'Fuel rail', 'Throttle body'], answer: 1 },
      { unit: "Unit V", q: "ECT sensor measures", options: ['Oil temperature', 'Air temperature', 'Coolant temperature', 'Exhaust temperature'], answer: 2 },
      { unit: "Unit V", q: "TPS measures", options: ['Throttle angle', 'Air pressure', 'Fuel pressure', 'Engine speed'], answer: 0 },
      { unit: "Unit V", q: "MAP sensor measures", options: ['Air flow', 'Intake pressure', 'Exhaust pressure', 'Fuel pressure'], answer: 1 },
      { unit: "Unit V", q: "OBD stands for", options: ['Onboard Diagnosis', 'Onboard Diagnostic', 'Onboard Data', 'Open Board Diagnosis'], answer: 1 },
      { unit: "Unit V", q: "OBD-II connector has", options: ['8 pins', '12 pins', '16 pins', '20 pins'], answer: 2 }
    ],
    
    set2: [
      // Unit I (7)
      { unit: "Unit I", q: "Kerb weight of a vehicle includes", options: ['Passengers only', 'Fuel, oil, and coolant', 'Load capacity', 'Driver and passengers'], answer: 1 },
      { unit: "Unit I", q: "Sedan body type usually has", options: ['Two doors', 'Three compartments', 'Open roof', 'Rear engine'], answer: 1 },
      { unit: "Unit I", q: "Body-on-frame construction is commonly used in", options: ['Small cars', 'Sports cars', 'Trucks and buses', 'Motorcycles'], answer: 2 },
      { unit: "Unit I", q: "Aluminum is preferred because it is", options: ['Heavy', 'Cheap', 'Corrosion resistant and light', 'Brittle'], answer: 2 },
      { unit: "Unit I", q: "Drag force depends on", options: ['Vehicle speed', 'Road condition', 'Fuel type', 'Tyre pressure only'], answer: 0 },
      { unit: "Unit I", q: "Tractive effort is the force available at", options: ['Engine crankshaft', 'Gearbox', 'Driving wheels', 'Axle housing'], answer: 2 },
      { unit: "Unit I", q: "Pitching is motion about", options: ['Longitudinal axis', 'Vertical axis', 'Transverse axis', 'Wheel axis'], answer: 2 },
      // Unit II (7)
      { unit: "Unit II", q: "Carburetor supplies fuel based on", options: ['Engine load only', 'Air velocity', 'Electronic signals', 'Sensors'], answer: 1 },
      { unit: "Unit II", q: "TBI stands for", options: ['Throttle Body Injection', 'Turbo Boost Injection', 'Twin Barrel Injection', 'Total Barrel Injection'], answer: 0 },
      { unit: "Unit II", q: "MPFI injects fuel near", options: ['Exhaust valve', 'Intake valve', 'Spark plug', 'Piston'], answer: 1 },
      { unit: "Unit II", q: "CRDI engines are used in", options: ['Petrol cars', 'Diesel engines', 'Two-wheelers', 'Gas engines'], answer: 1 },
      { unit: "Unit II", q: "EGR reduces", options: ['NOx emissions', 'CO emissions', 'HC emissions', 'Smoke'], answer: 0 },
      { unit: "Unit II", q: "Main energy source of EV is", options: ['Petrol', 'Diesel', 'Battery', 'LPG'], answer: 2 },
      { unit: "Unit II", q: "Lithium-ion battery advantage", options: ['High energy density', 'Heavy weight', 'Low life', 'Memory effect'], answer: 0 },
      // Unit III (6)
      { unit: "Unit III", q: "Air conditioning means", options: ['Cooling only', 'Heating only', 'Control of temperature only', 'Control of temperature, humidity, cleanliness and air circulation'], answer: 3 },
      { unit: "Unit III", q: "One ton of refrigeration equals", options: ['2.5 kW', '3.0 kW', '3.5 kW', '4.0 kW'], answer: 2 },
      { unit: "Unit III", q: "Condenser rejects heat to", options: ['Refrigerant', 'Passenger cabin', 'Atmosphere', 'Compressor'], answer: 2 },
      { unit: "Unit III", q: "Compressor in car AC is driven by", options: ['Electric motor only', 'Engine belt', 'Battery', 'Gearbox'], answer: 1 },
      { unit: "Unit III", q: "Vehicle heating system uses", options: ['Refrigerant heat', 'Exhaust heat', 'Engine coolant heat', 'Electric heater only'], answer: 2 },
      { unit: "Unit III", q: "Common refrigerant used today is", options: ['R12', 'R22', 'R134a', 'Ammonia'], answer: 2 },
      // Unit IV (6)
      { unit: "Unit IV", q: "Keyless entry system works using", options: ['Infrared signals', 'Radio frequency signals', 'Mechanical linkage', 'Hydraulic pressure'], answer: 1 },
      { unit: "Unit IV", q: "Park assist warning is given by", options: ['Engine sound', 'Visual and audio signals', 'Brake lights', 'Horn'], answer: 1 },
      { unit: "Unit IV", q: "GPS works using", options: ['Mobile towers', 'Satellites', 'Radio stations', 'Bluetooth'], answer: 1 },
      { unit: "Unit IV", q: "Automatic headlight dimming is used to", options: ['Save fuel', 'Reduce glare', 'Increase brightness', 'Improve mileage'], answer: 1 },
      { unit: "Unit IV", q: "Sealed beam headlight contains", options: ['Separate bulb and reflector', 'Integrated bulb, reflector and lens', 'LED array only', 'Halogen bulb only'], answer: 1 },
      { unit: "Unit IV", q: "Purpose of seat belt is to", options: ['Improve comfort', 'Prevent injury during collision', 'Reduce speed', 'Improve mileage'], answer: 1 },
      // Unit V (7)
      { unit: "Unit V", q: "Oxygen sensor helps in controlling", options: ['Ignition timing', 'Air–fuel ratio', 'Valve timing', 'Engine speed'], answer: 1 },
      { unit: "Unit V", q: "Common oxygen sensor type is", options: ['Piezoelectric', 'Zirconia', 'Thermistor', 'Hall effect'], answer: 1 },
      { unit: "Unit V", q: "ECT sensor is generally a", options: ['Capacitor', 'Thermistor', 'Inductor', 'Diode'], answer: 1 },
      { unit: "Unit V", q: "IAT sensor measures", options: ['Coolant temperature', 'Intake air temperature', 'Exhaust temperature', 'Oil temperature'], answer: 1 },
      { unit: "Unit V", q: "TPS is mounted on", options: ['Intake manifold', 'Throttle body', 'Fuel rail', 'Cylinder head'], answer: 1 },
      { unit: "Unit V", q: "Knock sensor detects", options: ['Engine vibration', 'Detonation', 'Misfire', 'Speed'], answer: 1 },
      { unit: "Unit V", q: "Purpose of OBD is to", options: ['Improve mileage', 'Monitor emissions', 'Detect faults', 'B and C'], answer: 3 }
    ],
    
    set3: [
      // Unit I (7)
      { unit: "Unit I", q: "Vehicle track width is the distance between", options: ['Two axles', 'Two headlights', 'Centers of wheels on same axle', 'Two bumpers'], answer: 2 },
      { unit: "Unit I", q: "SUV vehicles are characterized by", options: ['Low ground clearance', 'Monocoque body only', 'High ground clearance', 'Two-wheel drive only'], answer: 2 },
      { unit: "Unit I", q: "Advantage of monocoque construction is", options: ['Heavy weight', 'High fuel consumption', 'Better strength-to-weight ratio', 'Difficult repair'], answer: 2 },
      { unit: "Unit I", q: "Plastic is used in vehicle body mainly for", options: ['Chassis', 'Engine block', 'Bumpers and trims', 'Axles'], answer: 2 },
      { unit: "Unit I", q: "Aerodynamic shape improves", options: ['Fuel efficiency', 'Engine power', 'Braking force', 'Suspension stiffness'], answer: 0 },
      { unit: "Unit I", q: "Gradient resistance occurs when vehicle moves", options: ['On flat road', 'On curved road', 'On inclined road', 'At high speed'], answer: 2 },
      { unit: "Unit I", q: "Yaw motion is rotation about", options: ['Vertical axis', 'Longitudinal axis', 'Transverse axis', 'Wheel axis'], answer: 0 },
      // Unit II (7)
      { unit: "Unit II", q: "Carbureted engines give", options: ['Better mileage', 'Poor cold starting', 'Lower emissions', 'Precise fuel control'], answer: 1 },
      { unit: "Unit II", q: "TBI is also known as", options: ['Single point injection', 'Multi point injection', 'Direct injection', 'Port injection'], answer: 0 },
      { unit: "Unit II", q: "MPFI has", options: ['One injector', 'Two injectors', 'One injector per cylinder', 'No injector'], answer: 2 },
      { unit: "Unit II", q: "Fuel pressure in CRDI is", options: ['Low', 'Medium', 'Very high', 'Atmospheric'], answer: 2 },
      { unit: "Unit II", q: "PCV stands for", options: ['Positive Crankcase Ventilation', 'Pressure Control Valve', 'Pollution Control Valve', 'Power Crank Valve'], answer: 0 },
      { unit: "Unit II", q: "BMS monitors", options: ['Voltage', 'Temperature', 'Current', 'All of these'], answer: 3 },
      { unit: "Unit II", q: "Common EV motor type is", options: ['DC motor', 'Induction motor', 'BLDC motor', 'All of these'], answer: 3 },
      // Unit III (6)
      { unit: "Unit III", q: "Heat always flows from", options: ['Low temperature to high temperature', 'High pressure to low pressure', 'High temperature to low temperature', 'Low pressure to high pressure'], answer: 2 },
      { unit: "Unit III", q: "Vapour compression cycle consists of", options: ['2 components', '3 components', '4 components', '5 components'], answer: 2 },
      { unit: "Unit III", q: "Expansion valve causes", options: ['Pressure increase', 'Temperature increase', 'Pressure drop', 'Heat rejection'], answer: 2 },
      { unit: "Unit III", q: "Receiver-drier is used to", options: ['Cool air', 'Absorb moisture', 'Increase pressure', 'Control temperature'], answer: 1 },
      { unit: "Unit III", q: "Defroster helps to", options: ['Cool windshield', 'Remove fog', 'Increase humidity', 'Reduce airflow'], answer: 1 },
      { unit: "Unit III", q: "R134a is", options: ['Toxic', 'Flammable', 'Non-ozone depleting', 'Explosive'], answer: 2 },
      // Unit IV (6)
      { unit: "Unit IV", q: "Immobilizer is a part of", options: ['Lighting system', 'Fuel system', 'Anti-theft system', 'Cooling system'], answer: 2 },
      { unit: "Unit IV", q: "Sensors in park assist are mounted on", options: ['Roof', 'Dashboard', 'Bumpers', 'Doors'], answer: 2 },
      { unit: "Unit IV", q: "GPRS stands for", options: ['General Packet Radio Service', 'Global Packet Routing System', 'Ground Position Radio System', 'General Position Relay Service'], answer: 0 },
      { unit: "Unit IV", q: "Headlight time delay means", options: ['Headlight turns off instantly', 'Headlight stays ON for some time', 'Headlight blinks', 'Headlight brightness increases'], answer: 1 },
      { unit: "Unit IV", q: "Headlight dazzle causes", options: ['Better vision', 'Eye strain', 'Driver fatigue', 'B and C'], answer: 3 },
      { unit: "Unit IV", q: "Airbag is activated by", options: ['Brake sensor', 'Impact sensor', 'Speed sensor', 'Steering sensor'], answer: 1 },
      // Unit V (7)
      { unit: "Unit V", q: "Oxygen sensor output voltage range is", options: ['0–1 V', '5–12 V', '12–24 V', '0–5 V'], answer: 0 },
      { unit: "Unit V", q: "Rich mixture is indicated by", options: ['Low voltage', 'High voltage', 'Zero voltage', 'Constant voltage'], answer: 1 },
      { unit: "Unit V", q: "ECT sensor resistance", options: ['Increases with temperature', 'Decreases with temperature', 'Remains constant', 'Becomes zero'], answer: 1 },
      { unit: "Unit V", q: "IAT sensor type is", options: ['NTC thermistor', 'PTC thermistor', 'Hall sensor', 'Optical sensor'], answer: 0 },
      { unit: "Unit V", q: "TPS is generally a", options: ['Switch', 'Potentiometer', 'Thermistor', 'Hall sensor'], answer: 1 },
      { unit: "Unit V", q: "VSS measures", options: ['Engine speed', 'Vehicle speed', 'Wheel speed only', 'Transmission temperature'], answer: 1 },
      { unit: "Unit V", q: "OBD-II is", options: ['Mechanical system', 'Second generation OBD', 'Carburetor system', 'Fuel system'], answer: 1 }
    ],
    
    set4: [
      // Unit I (6)
      { unit: "Unit I", q: "The overhang is the distance between", options: ['Two axles', 'Bumper and axle', 'Wheels on same axle', 'Ground and body'], answer: 1 },
      { unit: "Unit I", q: "Hatchback differs from sedan mainly due to", options: ['Engine position', 'Boot design', 'Seating capacity', 'Wheelbase'], answer: 1 },
      { unit: "Unit I", q: "Ladder frame is a type of", options: ['Monocoque body', 'Space frame', 'Chassis frame', 'Plastic body'], answer: 2 },
      { unit: "Unit I", q: "Carbon fiber is used in", options: ['Economy cars', 'Heavy trucks', 'Racing cars', 'Buses'], answer: 2 },
      { unit: "Unit I", q: "Coefficient of drag is represented by", options: ['Cd', 'Cp', 'Cr', 'Ct'], answer: 0 },
      { unit: "Unit I", q: "Traction depends on", options: ['Road surface', 'Tyre grip', 'Vehicle weight', 'All of the above'], answer: 3 },
      // Unit II (7)
      { unit: "Unit II", q: "Emissions in carbureted engines are", options: ['Very low', 'High', 'Zero', 'Constant'], answer: 1 },
      { unit: "Unit II", q: "TBI injects fuel into", options: ['Combustion chamber', 'Intake manifold', 'Exhaust manifold', 'Cylinder'], answer: 1 },
      { unit: "Unit II", q: "TPS stands for", options: ['Throttle Position Sensor', 'Temperature Pressure Sensor', 'Turbo Pressure Sensor', 'Throttle Power Sensor'], answer: 0 },
      { unit: "Unit II", q: "CRDI uses", options: ['Mechanical pump', 'Common rail', 'Carburetor', 'Distributor'], answer: 1 },
      { unit: "Unit II", q: "VGT varies", options: ['Compressor speed', 'Turbine vane angle', 'Fuel pressure', 'Air filter size'], answer: 1 },
      { unit: "Unit II", q: "EV propulsion system includes", options: ['Battery', 'Motor', 'Controller', 'All of these'], answer: 3 },
      { unit: "Unit II", q: "Regenerative braking converts", options: ['Electrical to mechanical', 'Mechanical to electrical', 'Heat to sound', 'Fuel to power'], answer: 1 },
      // Unit III (7)
      { unit: "Unit III", q: "Refrigerant absorbs heat during", options: ['Condensation', 'Compression', 'Expansion', 'Evaporation'], answer: 3 },
      { unit: "Unit III", q: "Refrigeration cycle is a", options: ['Closed cycle', 'Open cycle', 'Intermittent cycle', 'Manual cycle'], answer: 0 },
      { unit: "Unit III", q: "Refrigerant enters compressor in", options: ['Liquid form', 'Vapour form', 'Solid form', 'Mixed form'], answer: 1 },
      { unit: "Unit III", q: "Evaporator is placed", options: ['In engine compartment', 'In cabin', 'Near radiator', 'Under chassis'], answer: 1 },
      { unit: "Unit III", q: "HVAC system provides", options: ['Cooling only', 'Heating only', 'Ventilation only', 'All of these'], answer: 3 },
      { unit: "Unit III", q: "Comfortable relative humidity is", options: ['10–20%', '30–60%', '70–90%', '100%'], answer: 1 },
      { unit: "Unit III", q: "Overcharging refrigerant causes", options: ['Poor cooling', 'High pressure', 'Compressor damage', 'All of these'], answer: 3 },
      // Unit IV (6)
      { unit: "Unit IV", q: "Central locking system locks", options: ['Only driver door', 'Only rear doors', 'All doors simultaneously', 'Bonnet only'], answer: 2 },
      { unit: "Unit IV", q: "Automatic parking system can control", options: ['Accelerator only', 'Steering only', 'Steering, brake and gear', 'Headlights'], answer: 2 },
      { unit: "Unit IV", q: "GPS is used to find", options: ['Vehicle speed', 'Vehicle location', 'Fuel consumption', 'Engine temperature'], answer: 1 },
      { unit: "Unit IV", q: "Light sensor is generally placed on", options: ['Bumper', 'Roof', 'Dashboard', 'Door'], answer: 2 },
      { unit: "Unit IV", q: "Antidazzle devices are used to", options: ['Increase brightness', 'Reduce glare', 'Improve mileage', 'Reduce heat'], answer: 1 },
      { unit: "Unit IV", q: "ABS prevents", options: ['Skidding', 'Wheel locking', 'Loss of steering control', 'All of these'], answer: 3 },
      // Unit V (7)
      { unit: "Unit V", q: "Lean mixture is indicated by", options: ['High voltage', 'Low voltage', 'No signal', 'AC signal'], answer: 1 },
      { unit: "Unit V", q: "Heated oxygen sensor uses", options: ['Battery power', 'Exhaust heat only', 'ECU power for heater', 'Alternator only'], answer: 2 },
      { unit: "Unit V", q: "ECT sensor is located near", options: ['Radiator', 'Thermostat housing', 'Fuel injector', 'Air filter'], answer: 1 },
      { unit: "Unit V", q: "Cold air is", options: ['Less dense', 'More dense', 'Same density', 'Weightless'], answer: 1 },
      { unit: "Unit V", q: "TPS output signal is", options: ['Digital', 'Constant', 'Variable voltage', 'AC signal'], answer: 2 },
      { unit: "Unit V", q: "MAF sensor measures", options: ['Air pressure', 'Air volume', 'Air mass', 'Air temperature'], answer: 2 },
      { unit: "Unit V", q: "Malfunction Indicator Lamp (MIL) is also called", options: ['Speed lamp', 'Check engine light', 'Battery lamp', 'Oil lamp'], answer: 1 }
    ],
    
    set5: [
      // Unit I (6)
      { unit: "Unit I", q: "Coupe body type generally has", options: ['Four doors', 'Two doors', 'Six seats', 'Extended roof'], answer: 1 },
      { unit: "Unit I", q: "Space frame construction uses", options: ['Sheet metal', 'Tubular sections', 'Wooden panels', 'Rubber materials'], answer: 1 },
      { unit: "Unit I", q: "Panel beating is used to", options: ['Cut metal', 'Shape damaged body panels', 'Paint body', 'Weld engine parts'], answer: 1 },
      { unit: "Unit I", q: "Bumper is used to", options: ['Improve looks only', 'Absorb impact', 'Support engine', 'Reduce noise'], answer: 1 },
      { unit: "Unit I", q: "Spoilers are used to", options: ['Increase drag', 'Improve downforce', 'Increase weight', 'Reduce braking'], answer: 1 },
      { unit: "Unit I", q: "Rolling motion occurs during", options: ['Acceleration', 'Braking', 'Cornering', 'Idling'], answer: 2 },
      // Unit II (7)
      { unit: "Unit II", q: "Advantage of TBI over carburetor", options: ['Simpler design', 'Better fuel control', 'Cheaper', 'Mechanical system'], answer: 1 },
      { unit: "Unit II", q: "MAP sensor measures", options: ['Fuel pressure', 'Manifold air pressure', 'Oil pressure', 'Coolant pressure'], answer: 1 },
      { unit: "Unit II", q: "Injectors in CRDI are", options: ['Mechanical', 'Electronically controlled', 'Manually controlled', 'Gravity based'], answer: 1 },
      { unit: "Unit II", q: "VVT varies", options: ['Valve lift', 'Valve timing', 'Fuel pressure', 'Spark energy'], answer: 1 },
      { unit: "Unit II", q: "GDI stands for", options: ['Gasoline Direct Injection', 'Gas Direct Ignition', 'Global Direct Injection', 'Gasoline Dual Injection'], answer: 0 },
      { unit: "Unit II", q: "EV charging types include", options: ['AC charging', 'DC fast charging', 'Wireless charging', 'All of these'], answer: 3 },
      { unit: "Unit II", q: "EVs produce", options: ['High emissions', 'Zero tailpipe emissions', 'Smoke', 'NOx'], answer: 1 },
      // Unit III (7)
      { unit: "Unit III", q: "Cooling effect is produced due to", options: ['High pressure', 'Low pressure', 'Evaporation of refrigerant', 'Compression of air'], answer: 2 },
      { unit: "Unit III", q: "Condenser converts refrigerant from", options: ['Liquid to vapour', 'Vapour to liquid', 'Solid to liquid', 'Liquid to solid'], answer: 1 },
      { unit: "Unit III", q: "Evaporator absorbs heat from", options: ['Engine', 'Outside air', 'Cabin air', 'Compressor'], answer: 2 },
      { unit: "Unit III", q: "Condenser is usually mounted", options: ['Inside cabin', 'Near evaporator', 'In front of radiator', 'Under vehicle'], answer: 2 },
      { unit: "Unit III", q: "Heater core works like", options: ['Condenser', 'Radiator', 'Compressor', 'Evaporator'], answer: 1 },
      { unit: "Unit III", q: "High humidity causes", options: ['Comfort', 'Fatigue', 'Dryness', 'Cooling'], answer: 1 },
      { unit: "Unit III", q: "Refrigerant charging is done to", options: ['Increase air flow', 'Maintain cooling efficiency', 'Reduce noise', 'Improve heating'], answer: 1 },
      // Unit IV (6)
      { unit: "Unit IV", q: "Anti-theft alarm is activated when", options: ['Door opens normally', 'Unauthorized entry occurs', 'Engine starts', 'Lights are switched on'], answer: 1 },
      { unit: "Unit IV", q: "Parking sensors measure", options: ['Speed', 'Distance from obstacles', 'Engine temperature', 'Wheel slip'], answer: 1 },
      { unit: "Unit IV", q: "GPS does not require", options: ['Internet connection', 'Satellite signal', 'Receiver', 'Antenna'], answer: 0 },
      { unit: "Unit IV", q: "Automatic dimming switches headlight from", options: ['OFF to ON', 'Low beam to high beam', 'High beam to low beam', 'Yellow to white'], answer: 2 },
      { unit: "Unit IV", q: "Proper headlight alignment improves", options: ['Safety', 'Visibility', 'Driving comfort', 'All of these'], answer: 3 },
      { unit: "Unit IV", q: "Electronic Stability Control (ESC) helps in", options: ['Parking', 'Preventing vehicle rollover', 'Speed increase', 'Fuel saving'], answer: 1 },
      // Unit V (7)
      { unit: "Unit V", q: "Faulty oxygen sensor results in", options: ['Better mileage', 'Poor fuel economy', 'High power', 'Smooth idling'], answer: 1 },
      { unit: "Unit V", q: "ECU uses ECT signal to control", options: ['Fuel injection', 'Ignition timing', 'Cooling fan', 'All of these'], answer: 3 },
      { unit: "Unit V", q: "ECU uses IAT signal to adjust", options: ['Fuel quantity', 'Ignition timing', 'Emission control', 'All of these'], answer: 3 },
      { unit: "Unit V", q: "Closed throttle voltage is approximately", options: ['0.5 V', '2.5 V', '5 V', '12 V'], answer: 0 },
      { unit: "Unit V", q: "MAP sensor output is proportional to", options: ['RPM', 'Vacuum', 'Temperature', 'Speed'], answer: 1 },
      { unit: "Unit V", q: "Crankshaft position sensor (CKP) detects", options: ['Valve timing', 'Crank position and speed', 'Fuel pressure', 'Air flow'], answer: 1 },
      { unit: "Unit V", q: "SAE J2012 standard defines", options: ['Fuel system', 'Emission limits', 'Diagnostic Trouble Codes', 'Engine design'], answer: 2 } ],

set6: [
  // Unit I (6)
  { unit: "Unit I", q: "Convertible body type has", options: ['Fixed roof', 'Sliding doors', 'Foldable roof', 'No windshield'], answer: 2 },
  { unit: "Unit I", q: "Spot welding is commonly used for", options: ['Chassis repair', 'Body panel joining', 'Engine repair', 'Glass fixing'], answer: 1 },
  { unit: "Unit I", q: "Windshield is made of", options: ['Tempered glass', 'Laminated glass', 'Fiber glass', 'Plastic'], answer: 1 },
  { unit: "Unit I", q: "Air resistance increases with", options: ['Speed', 'Load', 'Tyre pressure', 'Road gradient'], answer: 0 },
  { unit: "Unit I", q: "Poor traction leads to", options: ['Better acceleration', 'Wheel slip', 'Fuel saving', 'Smooth ride'], answer: 1 },
  { unit: "Unit I", q: "Corrosion is caused due to", options: ['Friction', 'Oxidation', 'Vibration', 'Heat'], answer: 1 },
  // Unit II (7)
  { unit: "Unit II", q: "TBI system is controlled by", options: ['Governor', 'ECU', 'Carburetor', 'Distributor'], answer: 1 },
  { unit: "Unit II", q: "Crankshaft position sensor detects", options: ['Speed and position', 'Fuel level', 'Temperature', 'Pressure'], answer: 0 },
  { unit: "Unit II", q: "ECU in CRDI controls", options: ['Injection timing', 'Injection quantity', 'Injection pressure', 'All of these'], answer: 3 },
  { unit: "Unit II", q: "VGT improves performance at", options: ['High speed only', 'Low speed only', 'All engine speeds', 'Idle only'], answer: 2 },
  { unit: "Unit II", q: "VVT works based on", options: ['Mechanical springs only', 'ECU control', 'Carburetor', 'Manual control'], answer: 1 },
  { unit: "Unit II", q: "BMS prevents", options: ['Overcharging', 'Over-discharging', 'Overheating', 'All of these'], answer: 3 },
  { unit: "Unit II", q: "EV layout does not include", options: ['Engine', 'Battery', 'Motor', 'Inverter'], answer: 0 },
  // Unit III (7)
  { unit: "Unit III", q: "Air conditioning system improves", options: ['Comfort', 'Health', 'Safety', 'All of these'], answer: 3 },
  { unit: "Unit III", q: "Expansion device controls", options: ['Air flow', 'Refrigerant flow', 'Heat transfer', 'Fan speed'], answer: 1 },
  { unit: "Unit III", q: "Purpose of refrigeration cycle is to", options: ['Create heat', 'Transfer heat', 'Destroy heat', 'Store heat'], answer: 1 },
  { unit: "Unit III", q: "Blower fan function is to", options: ['Compress refrigerant', 'Circulate air', 'Remove moisture', 'Control pressure'], answer: 1 },
  { unit: "Unit III", q: "Ventilation system supplies", options: ['Refrigerant', 'Fresh air', 'Fuel vapours', 'Exhaust gases'], answer: 1 },
  { unit: "Unit III", q: "Low humidity causes", options: ['Sweating', 'Dry skin', 'Fogging', 'Rusting'], answer: 1 },
  { unit: "Unit III", q: "New eco-friendly refrigerant is", options: ['R12', 'R22', 'R134a', 'R1234yf'], answer: 3 },
  // Unit IV (6)
  { unit: "Unit IV", q: "Immobilizer prevents engine start by", options: ['Blocking fuel', 'Blocking ignition', 'Blocking ECU authorization', 'All of these'], answer: 3 },
  { unit: "Unit IV", q: "Park assist reduces", options: ['Fuel consumption', 'Parking accidents', 'Engine load', 'Tyre wear'], answer: 1 },
  { unit: "Unit IV", q: "GPRS is mainly used for", options: ['Location only', 'Data transmission', 'Parking assistance', 'Headlight control'], answer: 1 },
  { unit: "Unit IV", q: "Automatic headlights improve", options: ['Driver comfort', 'Safety', 'Visibility', 'All of these'], answer: 3 },
  { unit: "Unit IV", q: "Mechanical antidazzle device works by", options: ['Changing bulb', 'Tilting headlight', 'Using sensors', 'Changing colour'], answer: 1 },
  { unit: "Unit IV", q: "Collapsible steering column reduces", options: ['Steering effort', 'Impact injury', 'Fuel use', 'Noise'], answer: 1 },
  // Unit V (7)
  { unit: "Unit V", q: "Oxygen sensor needs high temperature to work properly", options: ['True', 'False'], answer: 0 },
  { unit: "Unit V", q: "Cold engine requires", options: ['Lean mixture', 'Rich mixture', 'No fuel', 'Constant fuel'], answer: 1 },
  { unit: "Unit V", q: "Faulty IAT sensor can cause", options: ['Poor acceleration', 'Starting issues', 'Increased emissions', 'All of these'], answer: 3 },
  { unit: "Unit V", q: "TPS helps ECU in", options: ['Acceleration enrichment', 'Deceleration fuel cut-off', 'Gear shifting', 'A and B'], answer: 3 },
  { unit: "Unit V", q: "VSS is usually mounted on", options: ['Engine block', 'Gearbox', 'Radiator', 'ECU'], answer: 1 },
  { unit: "Unit V", q: "Knock sensor type is", options: ['Hall effect', 'Piezoelectric', 'Thermistor', 'Optical'], answer: 1 },
  { unit: "Unit V", q: "First letter of DTC 'P' indicates", options: ['Body', 'Chassis', 'Powertrain', 'Network'], answer: 2 }
],

set7: [
  // Unit I (6)
  { unit: "Unit I", q: "Station wagon body type is best suited for", options: ['Racing', 'Cargo transport', 'Family and luggage', 'Off-road use'], answer: 2 },
  { unit: "Unit I", q: "MIG welding uses", options: ['Tungsten electrode', 'Gas flame', 'Consumable wire electrode', 'Carbon rod'], answer: 2 },
  { unit: "Unit I", q: "Sun visor helps in", options: ['Cooling cabin', 'Preventing sun glare', 'Improving aerodynamics', 'Strengthening roof'], answer: 1 },
  { unit: "Unit I", q: "Rolling resistance depends on", options: ['Wind speed', 'Tyre material', 'Engine speed', 'Gear ratio'], answer: 1 },
  { unit: "Unit I", q: "Maximum tractive effort occurs when", options: ['Wheels slip', 'Engine stops', 'Tyres have good grip', 'Vehicle is stationary'], answer: 2 },
  { unit: "Unit I", q: "Underbody coating is used to", options: ['Improve looks', 'Reduce noise', 'Prevent rust', 'Increase weight'], answer: 2 },
  // Unit II (7)
  { unit: "Unit II", q: "Advantage of MPFI", options: ['Poor mileage', 'Uniform fuel distribution', 'High emissions', 'Complex maintenance'], answer: 1 },
  { unit: "Unit II", q: "Fuel injector is an", options: ['Sensor', 'Actuator', 'Switch', 'Relay'], answer: 1 },
  { unit: "Unit II", q: "Major CRDI component is", options: ['Spark plug', 'Injector', 'Carburetor', 'Throttle body'], answer: 1 },
  { unit: "Unit II", q: "VGT reduces", options: ['Turbo lag', 'Power', 'Efficiency', 'Boost pressure'], answer: 0 },
  { unit: "Unit II", q: "VVT improves", options: ['Power and fuel economy', 'Weight', 'Cost', 'Noise'], answer: 0 },
  { unit: "Unit II", q: "BLDC motor is", options: ['Less efficient', 'Highly efficient', 'Heavy', 'Noisy'], answer: 1 },
  { unit: "Unit II", q: "Fast charging reduces", options: ['Charging time', 'Battery life', 'Power', 'Voltage'], answer: 0 },
  // Unit III (6)
  { unit: "Unit III", q: "Refrigeration works on the principle of", options: ['Heat absorption', 'Heat rejection', 'Phase change', 'All of these'], answer: 3 },
  { unit: "Unit III", q: "Evaporator outlet refrigerant is", options: ['High pressure liquid', 'Low pressure vapour', 'High pressure vapour', 'Low pressure liquid'], answer: 1 },
  { unit: "Unit III", q: "Expansion valve is located between", options: ['Compressor and condenser', 'Condenser and evaporator', 'Evaporator and compressor', 'Blower and ducts'], answer: 1 },
  { unit: "Unit III", q: "Cabin air filter removes", options: ['Heat', 'Dust and pollen', 'Moisture', 'Refrigerant'], answer: 1 },
  { unit: "Unit III", q: "Recirculation mode", options: ['Uses outside air only', 'Uses cabin air', 'Stops air flow', 'Increases humidity'], answer: 1 },
  { unit: "Unit III", q: "AC system improves safety by", options: ['Cooling engine', 'Improving driver alertness', 'Increasing speed', 'Reducing fuel use'], answer: 1 },
  // Unit IV (7)
  { unit: "Unit IV", q: "Main advantage of keyless entry is", options: ['Increased fuel economy', 'Convenience and security', 'Reduced vehicle weight', 'Better mileage'], answer: 1 },
  { unit: "Unit IV", q: "Automatic door locking activates when", options: ['Ignition is off', 'Vehicle starts moving', 'Headlights turn on', 'Engine stops'], answer: 1 },
  { unit: "Unit IV", q: "Blind spot detection is related to", options: ['Parking safety', 'Engine safety', 'Fuel safety', 'Battery safety'], answer: 0 },
  { unit: "Unit IV", q: "Navigation system helps driver by", options: ['Route guidance', 'Traffic updates', 'Destination tracking', 'All of these'], answer: 3 },
  { unit: "Unit IV", q: "Automatic headlight system is controlled by", options: ['ECU', 'Carburetor', 'Battery only', 'Relay only'], answer: 0 },
  { unit: "Unit IV", q: "Automatic antidazzle system uses", options: ['Manual switch', 'Light sensors', 'Pressure sensors', 'Speed sensors'], answer: 1 },
  { unit: "Unit IV", q: "Airbags are examples of", options: ['Active safety', 'Passive safety', 'Preventive safety', 'Warning system'], answer: 1 },
  // Unit V (7)
  { unit: "Unit V", q: "Oxygen sensor helps in controlling", options: ['Ignition timing', 'Air–fuel ratio', 'Valve timing', 'Engine speed'], answer: 1 },
  { unit: "Unit V", q: "Faulty ECT sensor may cause", options: ['Hard starting', 'Poor mileage', 'Overheating indication', 'All of these'], answer: 3 },
  { unit: "Unit V", q: "IAT sensor is usually mounted on", options: ['Exhaust pipe', 'Intake manifold or air duct', 'Cylinder head', 'Radiator'], answer: 1 },
  { unit: "Unit V", q: "Faulty TPS causes", options: ['Hesitation', 'Poor acceleration', 'Stalling', 'All of these'], answer: 3 },
  { unit: "Unit V", q: "MAF sensor is mounted between", options: ['Engine and exhaust', 'Air filter and throttle body', 'Fuel tank and engine', 'Radiator and fan'], answer: 1 },
  { unit: "Unit V", q: "ECU retards ignition timing when", options: ['Knock detected', 'Speed increases', 'Temperature drops', 'Throttle closes'], answer: 0 },
  { unit: "Unit V", q: "'B' in DTC indicates", options: ['Brake system', 'Body system', 'Battery', 'Boost system'], answer: 1 }
],

set8: [
  // Unit I (6)
  { unit: "Unit I", q: "Limousine body type is known for", options: ['Compact size', 'High speed', 'Extended wheelbase', 'Open roof'], answer: 2 },
  { unit: "Unit I", q: "Body filler is used to", options: ['Strengthen metal', 'Cover dents', 'Prevent rust', 'Reduce noise'], answer: 1 },
  { unit: "Unit I", q: "Mud flaps are used to", options: ['Improve speed', 'Reduce dirt splash', 'Improve braking', 'Support suspension'], answer: 1 },
  { unit: "Unit I", q: "Tractive resistance is the", options: ['Resistance at wheels', 'Total resistance opposing motion', 'Engine resistance', 'Brake resistance'], answer: 1 },
  { unit: "Unit I", q: "Bouncing is vertical movement due to", options: ['Steering', 'Road irregularities', 'Braking', 'Cornering'], answer: 1 },
  { unit: "Unit I", q: "Primer coat is applied to", options: ['Improve shine', 'Protect metal', 'Reduce weight', 'Improve aerodynamics'], answer: 1 },
  // Unit II (7)
  { unit: "Unit II", q: "MPFI improves", options: ['Noise', 'Mileage and power', 'Engine size', 'Weight'], answer: 1 },
  { unit: "Unit II", q: "Idle air control valve controls", options: ['Fuel pressure', 'Idle speed', 'Ignition timing', 'Valve timing'], answer: 1 },
  { unit: "Unit II", q: "CRDI rail stores", options: ['Fuel at constant pressure', 'Air', 'Exhaust gas', 'Coolant'], answer: 0 },
  { unit: "Unit II", q: "VGT is commonly used in", options: ['Petrol carburetor engines', 'Diesel CRDI engines', 'Two-stroke engines', 'LPG engines'], answer: 1 },
  { unit: "Unit II", q: "GDI injects fuel directly into", options: ['Intake manifold', 'Cylinder', 'Exhaust', 'Fuel rail'], answer: 1 },
  { unit: "Unit II", q: "EGR works by", options: ['Adding fresh air', 'Recirculating exhaust gas', 'Increasing temperature', 'Removing oxygen'], answer: 1 },
  { unit: "Unit II", q: "Lithium-ion vs Lead-acid: Li-ion has", options: ['Lower energy density', 'Higher energy density', 'Shorter life', 'More weight'], answer: 1 },
  // Unit III (7)
  { unit: "Unit III", q: "One ton of refrigeration equals", options: ['2.5 kW', '3.0 kW', '3.5 kW', '4.0 kW'], answer: 2 },
  { unit: "Unit III", q: "Expansion device controls", options: ['Air flow', 'Refrigerant flow', 'Heat transfer', 'Fan speed'], answer: 1 },
  { unit: "Unit III", q: "AC clutch connects", options: ['Fan to motor', 'Compressor to engine', 'Evaporator to blower', 'Condenser to radiator'], answer: 1 },
  { unit: "Unit III", q: "Blending door controls", options: ['Air direction', 'Air temperature', 'Air pressure', 'Humidity'], answer: 1 },
  { unit: "Unit III", q: "Fogging occurs due to", options: ['High temperature', 'High humidity', 'Low pressure', 'Low airflow'], answer: 1 },
  { unit: "Unit III", q: "AC reduces pollution inside cabin by", options: ['Heating air', 'Filtering air', 'Compressing air', 'Humidifying air'], answer: 1 },
  { unit: "Unit III", q: "Undercharging refrigerant results in", options: ['Good cooling', 'Ice formation', 'Poor cooling', 'High pressure'], answer: 2 },
  // Unit IV (6)
  { unit: "Unit IV", q: "RFID technology is used in", options: ['Headlights', 'Immobilizer', 'ABS', 'Airbags'], answer: 1 },
  { unit: "Unit IV", q: "Rear view camera works with", options: ['GPS', 'Park assist', 'ABS', 'ESC'], answer: 1 },
  { unit: "Unit IV", q: "Real-time traffic information uses", options: ['GPS only', 'GPRS only', 'GPS + GPRS', 'ECU only'], answer: 2 },
  { unit: "Unit IV", q: "Headlight delay is useful while", options: ['Parking at night', 'Highway driving', 'Overtaking', 'Day driving'], answer: 0 },
  { unit: "Unit IV", q: "Headlight beam control is achieved by", options: ['Reflector design', 'Lens design', 'Beam adjuster', 'All of these'], answer: 3 },
  { unit: "Unit IV", q: "Central locking improves", options: ['Comfort only', 'Security only', 'Comfort and security', 'Fuel efficiency'], answer: 2 },
  // Unit V (7)
  { unit: "Unit V", q: "Common oxygen sensor type is", options: ['Piezoelectric', 'Zirconia', 'Thermistor', 'Hall effect'], answer: 1 },
  { unit: "Unit V", q: "ECT sensor testing is done using", options: ['Ammeter', 'Ohmmeter', 'Voltmeter', 'Oscilloscope'], answer: 1 },
  { unit: "Unit V", q: "IAT sensor resistance", options: ['Increases with temperature', 'Decreases with temperature', 'Is constant', 'Becomes infinite'], answer: 1 },
  { unit: "Unit V", q: "TPS testing is done using", options: ['Ohmmeter', 'Voltmeter', 'Both A and B', 'Ammeter'], answer: 2 },
  { unit: "Unit V", q: "VSS data is used for", options: ['ABS', 'Cruise control', 'Speedometer', 'All of these'], answer: 3 },
  { unit: "Unit V", q: "CKP sensor is essential for", options: ['Fuel injection timing', 'Ignition timing', 'Engine starting', 'All of these'], answer: 3 },
  { unit: "Unit V", q: "'C' in DTC refers to", options: ['Cooling', 'Chassis', 'Clutch', 'Cylinder'], answer: 1 }
],

set9: [
  // Unit I (6)
  { unit: "Unit I", q: "Pick-up truck body is designed for", options: ['Luxury travel', 'Carrying goods', 'Public transport', 'Racing'], answer: 1 },
  { unit: "Unit I", q: "Dent puller is used to", options: ['Paint body', 'Remove dents', 'Cut metal', 'Tighten bolts'], answer: 1 },
  { unit: "Unit I", q: "Rear-view mirror is used for", options: ['Decoration', 'Rear visibility', 'Speed control', 'Fuel economy'], answer: 1 },
  { unit: "Unit I", q: "Tractive effort is reduced by", options: ['Gear reduction', 'Increase in resistance', 'Good tyres', 'Dry road'], answer: 1 },
  { unit: "Unit I", q: "Sway refers to", options: ['Side-to-side movement', 'Vertical movement', 'Rotation', 'Forward movement'], answer: 0 },
  { unit: "Unit I", q: "Spray painting is preferred because", options: ['It is slow', 'It gives uniform finish', 'It is expensive', 'It wastes paint'], answer: 1 },
  // Unit II (7)
  { unit: "Unit II", q: "CTS measures", options: ['Air temperature', 'Fuel temperature', 'Coolant temperature', 'Oil temperature'], answer: 2 },
  { unit: "Unit II", q: "Actuators convert", options: ['Electrical to mechanical action', 'Mechanical to electrical', 'Fuel to energy', 'Heat to work'], answer: 0 },
  { unit: "Unit II", q: "CRDI injection can occur", options: ['Once per cycle', 'Multiple times per cycle', 'Only at TDC', 'Only at BDC'], answer: 1 },
  { unit: "Unit II", q: "VGT improves", options: ['Mileage', 'Torque', 'Emissions', 'All of these'], answer: 3 },
  { unit: "Unit II", q: "Stratified charge means", options: ['Uniform mixture', 'Rich near spark, lean elsewhere', 'Rich mixture everywhere', 'Lean mixture everywhere'], answer: 1 },
  { unit: "Unit II", q: "EGR valve controls", options: ['Fuel pressure', 'Exhaust gas flow', 'Air intake', 'Oil pressure'], answer: 1 },
  { unit: "Unit II", q: "Lead-acid batteries are", options: ['Lightweight', 'Heavy', 'Expensive', 'Maintenance free'], answer: 1 },
  // Unit III (7)
  { unit: "Unit III", q: "Refrigerant absorbs heat during", options: ['Condensation', 'Compression', 'Expansion', 'Evaporation'], answer: 3 },
  { unit: "Unit III", q: "Main components of car AC are", options: ['Compressor, condenser, expansion valve, evaporator', 'Radiator, fan, blower, filter', 'Battery, motor, relay, fuse', 'Heater, blower, ducts'], answer: 0 },
  { unit: "Unit III", q: "Safety switch in AC system protects", options: ['Passengers', 'Compressor', 'Engine', 'Battery'], answer: 1 },
  { unit: "Unit III", q: "HVAC ducts are used to", options: ['Carry refrigerant', 'Carry air', 'Carry coolant', 'Carry fuel'], answer: 1 },
  { unit: "Unit III", q: "Fresh air mode improves", options: ['Cooling speed', 'Air quality', 'Compressor efficiency', 'Fuel economy'], answer: 1 },
  { unit: "Unit III", q: "Proper HVAC reduces", options: ['Driver fatigue', 'Visibility', 'Comfort', 'Efficiency'], answer: 0 },
  { unit: "Unit III", q: "Temperature control is achieved by", options: ['Compressor cycling', 'Blend door', 'Thermostat', 'All of these'], answer: 3 },
  // Unit IV (6)
  { unit: "Unit IV", q: "Main drawback of keyless entry is", options: ['High cost', 'Signal hacking risk', 'Battery dependency', 'All of these'], answer: 3 },
  { unit: "Unit IV", q: "Park assist is most useful in", options: ['Highway driving', 'City traffic', 'Parking areas', 'Off-road driving'], answer: 2 },
  { unit: "Unit IV", q: "GPRS requires", options: ['Satellite', 'Internet network', 'ECU only', 'Sensors'], answer: 1 },
  { unit: "Unit IV", q: "Anti-dazzle function is related to", options: ['Parking lights', 'Headlights', 'Indicators', 'Fog lamps'], answer: 1 },
  { unit: "Unit IV", q: "Advantage of sealed beam headlight", options: ['Easy repair', 'Compact and dust-proof', 'Adjustable reflector', 'Low cost replacement'], answer: 1 },
  { unit: "Unit IV", q: "Safety devices aim to", options: ['Prevent accidents', 'Reduce injury', 'Improve vehicle control', 'All of these'], answer: 3 },
  // Unit V (7)
  { unit: "Unit V", q: "Oxygen sensor output voltage range is", options: ['0–1 V', '5–12 V', '12–24 V', '0–5 V'], answer: 0 },
  { unit: "Unit V", q: "ECU uses ECT signal to control", options: ['Fuel injection', 'Ignition timing', 'Cooling fan', 'All of these'], answer: 3 },
  { unit: "Unit V", q: "Cold air is", options: ['Less dense', 'More dense', 'Same density', 'Weightless'], answer: 1 },
  { unit: "Unit V", q: "TPS helps ECU in", options: ['Acceleration enrichment', 'Deceleration fuel cut-off', 'Gear shifting', 'A and B'], answer: 3 },
  { unit: "Unit V", q: "Knock sensor improves", options: ['Power', 'Engine protection', 'Fuel economy', 'All of these'], answer: 3 },
  { unit: "Unit V", q: "Actuator converts", options: ['Mechanical energy to electrical', 'Electrical signal to mechanical action', 'Heat to energy', 'Pressure to voltage'], answer: 1 },
  { unit: "Unit V", q: "'U' in DTC indicates", options: ['Utility', 'User', 'Network communication', 'Unit'], answer: 2 }
],
};
};