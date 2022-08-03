document.querySelector("#extract_btn").addEventListener("click", function(){(
    let addr = document.querySelector("#address").value;
    addr = /([^ ]+)([^,]+)(,([^,]+))?,([^,]+),([^,]+)/
    let result = addr_pattern.exec(addr);
    let addr_components = {
        0: '',
        1: 'Street number',
        2: 'Street Name',
        3: '', /*The apostrophe and the ward name */
        3: 'Ward',
        4: 'District',
        5: 'City',
    }
    for 
)}

