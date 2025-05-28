
// Function to show the information based on the destination
function showDestinationInfo(destination) {
    // Hide all destination info sections
    const sections = document.querySelectorAll('.destination-info');
    sections.forEach(section => section.style.display = 'none');
    
    // Show the clicked destination's information
    const selectedSection = document.getElementById(destination);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}
