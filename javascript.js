

const harry = {
    firstName: "Harry",
    lastName: "Potter",
    hairColor: "black",
  };
  
  const hermione = {
    firstName: "Hermione",
    lastName: "Granger",
    hairColor: "brown",
  };
  
  const ron = {
    firstName: "Ron",
    lastName: "Weasley",
    hairColor: "red",
  };

  const renderAllTheWizards = (wizardList) => {
    // get ul list
    const list = document.getElementById('list');

    //loop through all wizards
    wizardList.forEach((wizard) => {
      //create a li tag for wizard, insert the name and set color to hairColor
      const listItem = document.createElement('li')
      listItem.innerHTML = `${wizard.firstName} ${wizard.lastName}`
      listItem.style.color = wizard.hairColor;

      //insert into the ul list
      list.appendChild(listItem);
    });

  };

  // array with all wizards;
  const wizardList = [harry, hermione, ron];

// call function with all wizards
renderAllTheWizards(wizardList);