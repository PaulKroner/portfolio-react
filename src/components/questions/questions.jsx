import "./questions.css";

const Questions = () => {
    return (
        <>
            <div className="container-fluid d-flex flex-column">
                <p className="question-heading">Warum sollten Sie mich in Betracht ziehen?</p>
                <div className="question-list">
                    <ul className="dropdown-list">
                        <li className="dropend dp-desktop">
                            <button className="btn dropdown-toggle dropdown-button" type="button" id="neueErfahrung"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                neue Erfahrungen sammeln
                            </button>
                            <div className="dropdown-menu dropdown-text" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                    Ich bin stets offen, neue Software, Frameworks und Aufgaben kennenzulernen.
                                </a>
                            </div>
                        </li>
                        <li className="dropend dp-desktop">
                            <button className="btn dropdown-toggle dropdown-button" type="button" id="werte"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                wichtige Werte
                            </button>
                            <div className="dropdown-menu dropdown-text" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                    Für mich ist ein respektvoller Umgang und Kommunikation auf Augenhöhe von
                                    herausragender Bedeutung.
                                    Die Einhaltung von Terminen und die pünktliche Anwesenheit bei der Arbeit
                                    sind für mich unerlässlich.
                                    Außerdem setze ich mich kontinuierlich dafür ein,
                                    meine Aufgaben zuverlässig und gewissenhaft zu erfüllen.
                                </a>
                            </div>
                        </li>
                        <li className="dropend dp-desktop">
                            <button className="btn dropdown-toggle dropdown-button" type="button" id="wertvoll"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                wertvolles Teammitglied
                            </button>
                            <div className="dropdown-menu dropdown-text" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                    Ich bin ein wertvolles Teammitglied, da ich mich gut in neue Gruppen
                                    integriere
                                    und schnell Anschluss finde.
                                    Genauso möchte ich die Stimmung im Team positiv beeinflussen und mich in
                                    Teamabenden oder Team-Spielen einbringen.
                                </a>
                            </div>
                        </li>
                        <li className="dropend dp-desktop">
                            <button className="btn dropdown-toggle dropdown-button" type="button" id="überblick"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                großer Überblick
                            </button>
                            <div className="dropdown-menu dropdown-text" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">
                                    Durch mein Studium als Wirtschaftsinformatiker habe ich einen breiten
                                    Überblick über IT-Themen bekommen
                                    und kann mich so in verschiedene Aufgaben und Bereiche hineinversetzen.
                                    Sowohl durch die Zusammenarbeit mit <i>Finatix</i> als auch durch meine
                                    Arbeit bei
                                    <i>GISA</i>
                                    habe ich einen Einblick in die Arbeitswelt bekommen.
                                    Zusätzlich interessiere ich mich für das Programmieren und habe in meiner
                                    Freizeit
                                    sowie während meiner Studienzeit Erfahrungen sammeln können, die mir in der
                                    Arbeitswelt hilfreich sein werden.
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Questions;