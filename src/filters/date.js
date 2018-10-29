
export default (theDate) =>{
    const date = new Date(theDate)
    return date.toLocaleDateString(['en-us'], {month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'});
    
}