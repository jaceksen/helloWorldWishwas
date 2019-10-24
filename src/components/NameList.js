import React from 'react';
import Person from './Person';

function NameList() {
    const names=["Jacek", "Maja", "Tiguś", "Stasiu", "Rimulka", "Kamilek"];
    const nameList = names.map(name => <h2 key={name}>Hello2 {name}</h2>)
    const persons = [
        {
            id: 1,
            name: 'Jacek',
            age: 47,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Maja',
            age: 7,
            skill: 'All skills'
        },
        {
            id: 3,
            name: 'Tigo',
            age: 5,
            skill: 'Big surprise'
        },
    ];

    const personList = persons.map(person => <h2 key={person.id}>I am {person.name}, {person.age} y.o.</h2>);

    const personList2 = persons.map(person => <Person person={person} key={person.id}></Person>);

    return (
        <div>
            {
                personList2
            }
            {
                personList
            }
            <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>
            <h2>{names[3]}</h2>
            {
                names.map(name => <h2 key={name}>Hello {name}</h2>)
            }
            {
                nameList
            }
        </div>
    )
}

export default NameList
