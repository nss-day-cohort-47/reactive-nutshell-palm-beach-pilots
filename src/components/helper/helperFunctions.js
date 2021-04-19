export const getCurrentUser =() =>{
    return sessionStorage.getItem("nutshell_user");
}

export const parseDate = (dateString) => {
    let splitDate = dateString.split(/\D/)
    return new Date(splitDate[0], --splitDate[1], splitDate[2])

}

export function compareValues(key, order = 'asc') { //function to use with the array.sort method see belown for examples
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}
  //  let testArray = [{team: "Phillies", city: "Philadelphia"},{team: "Astros", city: "Houston"},{team: "Marlins", city: "Miami"},{team: "Braves", city: "Atlanta"}]
  //   testArray.sort(compareValues("city")) will sort by city ascending order by default
  //   [{team: "Braves", city: "Atlanta"},{team: "Astros", city: "Houston"},{team: "Marlins", city: "Miami"},{team: "Phillies", city: "Philadelphia"}]
 //    testArray.sort(compareValues("city", "desc")) will sort by city descending order
//     [{team: "Phillies", city: "Philadelphia"},{team: "Marlins", city: "Miami"},{team: "Astros", city: "Houston"},{team: "Braves", city: "Atlanta"}]
//     testArray.sort(compareValues("team", "asc")) will sort by city ascending order
//     [{team: "Astros", city: "Houston"}, {team: "Braves", city: "Atlanta"}, {team: "Marlins", city: "Miami"}, {team: "Phillies", city: "Philadelphia"}

