//const { Int32 } = require('mongodb')
const mongoose = require('mongoose')

const carDetailSchema = new mongoose.Schema({	
    
    "ID"	:	String	,
    "Full car name"	:	String	,
    "Image URL"	:	String	,
    "Brand"	:	String	,
    "Range"	:	String	,
    "Generation"	:	String	,
    "Model series"	:	String	,
    "Manufacturer internal code"	:	String	,
    "Model series launch date"	:	String	,
    "Engine version"	:	String	,
    "Trim"	:	String	,
    "Model launch date"	:	String	,
    "HSN key number"	:	String	,
    "TSN key number"	:	String	,
    "Vehicle tax / year (may vary due to WLTP conversion)"	:	String	,
    "CO2 efficiency class"	:	String	,
    "Base price"	:	String	,
    "Engine type"	:	String	,
    "Engine code"	:	String	,
    "Fuel type"	:	String	,
    "Fuel type (2nd drive)"	:	String	,
    "Emission control"	:	String	,
    "Cylinders type"	:	String	,
    "Number of cylinders"	:	String	,
    "Injection type"	:	String	,
    "Supercharger type"	:	String	,
    "Valves per cylinder"	:	String	,
    "Displacement (ccm)"	:	String	,
    "Power (kW)"	:	String	,
    "Power (HP)"	:	String	,
    "Power (RPM)"	:	String	,
    "Torque (Nm)"	:	String	,
    "Torque (RPM)"	:	String	,
    "Drivetrain"	:	String	,
    "Gearbox type"	:	String	,
    "Number of gears"	:	String	,
    "Start / stop system"	:	String	,
    "Shift indicator"	:	String	,
    "Emission category"	:	String	,
    "Length (mm)"	:	String	,
    "Width (mm)"	:	String	,
    "Width including mirrors (mm)"	:	String	,
    "Height (mm)"	:	String	,
    "Wheelbase (mm)"	:	String	,
    "Ground clearance (mm)"	:	String	,
    "Turning circle (m)"	:	String	,
    "Front angle"	:	String	,
    "Rear angle"	:	String	,
    "Ramp angle"	:	String	,
    "Wading depth"	:	String	,
    "Maximul slope"	:	String	,
    "Luggage volume normal"	:	String	,
    "Luggage volume window height with folded back seat bench"	:	String	,
    "Luggage volume roof height with folded back seat bench"	:	String	,
    "Rear bench foldable"	:	String	,
    "Curb weight (kg)"	:	String	,
    "Gross weight (kg)"	:	String	,
    "Payload (kg)"	:	String	,
    "Towing capacity braked 12%"	:	String	,
    "Towing capacity unbracked"	:	String	,
    "GCW"	:	String	,
    "Vertical load"	:	String	,
    "Roof load"	:	String	,
    "Body type"	:	String	,
    "Number of doors"	:	String	,
    "Number of sliding doors standard / option"	:	String	,
    "Vehicle class"	:	String	,
    "Number of seats normal"	:	String	,
    "Number of seats maximum"	:	String	,
    "Front suspension"	:	String	,
    "Rear suspension"	:	String	,
    "Power steering"	:	String	,
    "Front brake"	:	String	,
    "Rear brake"	:	String	,
    "Tire size"	:	String	,
    "Tire size rear (if different)"	:	String	,
    "Tire pressure monitoring system"	:	String	,
    "Tire pressure control designation"	:	String	,
    "Runflat"	:	String	,
    "Acceleration (s)"	:	String	,
    "Top speed (km/h)"	:	String	,
    "Top speed electric (hybrid)"	:	String	,
    "Driving noise"	:	String	,
    "Fuel consumption city (NEDC)"	:	String	,
    "Fuel consumption highway (NEDC)"	:	String	,
    "Fuel consumption mixed (NEDC)"	:	String	,
    "Range (electric)"	:	String	,
    "CO2 emissions (NEFZ)"	:	String	,
    "Consumption to (WLTP) combined"	:	String	,
    "CO2 emissions (WLTP)"	:	String	,
    "Gas tank size"	:	String	,
    "Gas tank location"	:	String	,
    "Storage technology (e"	:	Object	,
    "Battery weight (electric and plug-in hybrid)"	:	String	,
    "AC charging port on the vehicle"	:	String	,
    "DC quick charge connector on the vehicle"	:	String	,
    "AC charging function"	:	String	,
    "DC charging optional (max)"	:	String	,
    "Loading time"	:	String	,
    "Airbag driver"	:	String	,
    "Airbag passenger"	:	String	,
    "Front side airbag"	:	String	,
    "Rear side airbag"	:	String	,
    "Front head airbag"	:	String	,
    "Front head airbag designation"	:	String	,
    "Rear head airbag"	:	String	,
    "Rear head airbag designation"	:	String	,
    "Airbag Other"	:	String	,
    "Airbag deactivation"	:	String	,
    "Airbag deactivation designation"	:	String	,
    "Pre-crash system"	:	String	,
    "PreCrash system designation"	:	String	,
    "Rear headrests"	:	String	,
    "Rear head restraints"	:	String	,
    "Active headrests"	:	String	,
    "Isofix"	:	String	,
    "Isofix designation"	:	String	,
    "Child seat integrated"	:	String	,
    "ABS"	:	String	,
    "Brake assist"	:	String	,
    "Brake assist designation"	:	String	,
    "City emergency brake assist"	:	String	,
    "Emergency brake Assist"	:	String	,
    "Collision warning"	:	String	,
    "Cornering brake control"	:	String	,
    "Traction control"	:	String	,
    "Drive slip regulation"	:	String	,
    "Electronic stability program"	:	String	,
    "Driving dynamics control"	:	String	,
    "Vehicle Dynamics Control - Trailer"	:	String	,
    "Charging status check"	:	String	,
    "Brake light dynamic"	:	String	,
    "Brake light dynamic designation"	:	String	,
    "Active steering"	:	String	,
    "Fog lights"	:	String	,
    "Cornering"	:	String	,
    "Headlights"	:	String	,
    "Variable light distribution"	:	String	,
    "Xenon headlights"	:	String	,
    "LED headlights"	:	String	,
    "Laser headlights"	:	String	,
    "Light sensor"	:	String	,
    "Rain sensor"	:	String	,
    "Auto distance control"	:	String	,
    "Traffic jam assistant"	:	String	,
    "Night view assist"	:	String	,
    "Pedestrian detection"	:	String	,
    "Drowsiness detection"	:	String	,
    "Lane departure"	:	String	,
    "Lane change assistant"	:	String	,
    "Emergency assistant"	:	String	,
    "Intersection assistant1"	:	String	,
    "Intersection assistant2"	:	String	,
    "Pedestrian protection system"	:	String	,
    "Traffic sign recognition"	:	String	,
    "Head-up display (HUD)"	:	String	,
    "Speed ??limiter"	:	String	,
    "High-beam assistant"	:	String	,
    "Warranty (vehicle)"	:	String	,
    "Paint warranty"	:	String	,
    "Rust warranty"	:	String	,
    "Additional warranty"	:	String	,
    "Others"	:	String	,
    "Classes customary according to ADAC standard"	:	String	,
    "Air conditioner"	:	String	,
    "Central locking system"	:	String	,
    "Window lifter electr"	:	Object	,
    "Parking aid"	:	String	,
    "Parking aid designation"	:	String	,
    "Parking assistant"	:	String	,
    "Trailer assist"	:	String	,
    "Hill start assist"	:	String	,
    "Radio"	:	String	,
    "Radio designation"	:	String	,
    "Navigation"	:	String	,
    "Navigation designation"	:	String	,
    "Emergency function"	:	String	,
    "Alloy wheels"	:	String	,
    "Leather interior"	:	String	,
    "Metallic paint"	:	String	,
    "Trailer hitch"	:	String	,
    "AC charging cable household"	:	String	,
    "AC charging cable charging station"	:	String	,
    "Heat pump"	:	String	,
    "ADAC price"	:	String	,
    "Tax"	:	String	,
    "Tax Exemption"	:	String	,
    "Insurance Class Liability"	:	String	,
    "Insurance Class Partial Cover"	:	String	,
    "Insurance Class Comprehensive Cover"	:	String	,
    "Insurance Premium Liability"	:	String	,
    "Insurance Premium Partial Cover"	:	String	,
    "Insurance Premium Comprehensive Cover"	:	String	,
    "Costs months"	:	String	,
    "Costs kilometers"	:	String	,
    "Costs per month"	:	String	,
    "Costs per kilometer"	:	String	,
    "Costs deterioration"	:	String	,
    "Costs operational"	:	String	,
    "Costs fix"	:	String	,
    "Costs workshop"	:	String	
    
})

module.exports = mongoose.model('CarDetails', carDetailSchema)

