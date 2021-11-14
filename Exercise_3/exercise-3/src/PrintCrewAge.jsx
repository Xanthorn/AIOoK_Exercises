import React, { Component } from "react";
import AgeInList from "./AgeInList";

class PrintCrewAge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crewAge: [21, 32, 45, 35, 18]
        }
    }

    avgAge() {
        let sum = 0;
        let age = this.state.crewAge;

        for (let i = 0; i < age.length; i++) {
            sum += age[i];
        }

        return Math.round(sum / age.length * 100) / 100;
    }

    newAge() {
        let min = Math.ceil(16);
        let max = Math.floor(100);
        let randAge = Math.floor(Math.random() * (max - min + 1)) + min;

        this.setState((prevState) => {
            let age = prevState.crewAge;

            age.push(randAge);

            return { crewAge: age }
        });
    }

    componentDidMount() {
        this.addNew = setInterval(
            () => this.newAge(),
            2000
        );
    }

    componentWillUnmount() {
        clearInterval(this.addNew);
    }

    render() {
        return (
            <div className="col">
                <h2 className="text-center">Wiek załogi:</h2>
                <ul className="list-group list-group-flush">
                    {this.state.crewAge.map((age, key) => {
                        return (
                            <AgeInList
                                key={key}
                                age={age}
                            />
                        )
                    })}
                </ul>
                <p className="h2">Średnia wieku załogi to: {this.avgAge()}</p>
            </div>
        )
    }
}

export default PrintCrewAge;