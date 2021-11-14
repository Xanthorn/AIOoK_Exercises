import React, { Component } from "react";
import PersonInCrew from "./PersonInCrew";

class PrintCrew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            crewList: [
                {
                    name: "Dariusz",
                    surname: "Łachacz",
                    age: 29,
                    rank: "szeregowy",
                    email: "darek.lachacz@wp.pl"
                },
                {
                    name: "Maryla",
                    surname: "Rodowicz",
                    age: 75,
                    rank: "generał",
                    email: "maryla.rodowicz@gmail.com"
                },
                {
                    name: "Krzysztof",
                    surname: "Ibisz",
                    age: 56,
                    rank: "pułkownik",
                    email: "krzys.ibisz@onet.pl"
                },
                {
                    name: "Tadzio",
                    surname: "Piesek",
                    age: 4,
                    rank: "piesek",
                    email: "tadzio@piesek.pl"
                },
                {
                    name: "Dzidziuś",
                    surname: "Malutki",
                    age: 1,
                    rank: "bobas",
                    email: "brak"
                }
            ]
        }
    }

    render() {
        return (
            <div className="col">
                <h1 className="display-4 text-center">Lista członków załogi:</h1>
                <div className="container">
                    <table className="table table-striped table-hover table-responsive">
                        <thead>
                            <tr>
                                <th>
                                    <p className="h2">Imię</p>
                                </th>
                                <th>
                                    <p className="h2">Nazwisko</p>
                                </th>
                                <th>
                                    <p className="h2">Wiek</p>
                                </th>
                                <th>
                                    <p className="h2">Stopień</p>
                                </th>
                                <th>
                                    <p className="h2">E-mail</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.crewList.map((crewmate, key) => {
                                return (
                                    <PersonInCrew
                                        key={key}
                                        name={crewmate.name}
                                        surname={crewmate.surname}
                                        age={crewmate.age}
                                        rank={crewmate.rank}
                                        email={crewmate.email}
                                    />
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default PrintCrew;