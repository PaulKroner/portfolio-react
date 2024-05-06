import "./cv.css";

const Cv = () => {

    // fade in Animation
    // function reveal() {
    //     var reveals = document.querySelectorAll(".reveal");

    //     for (var i = 0; i < reveals.length; i++) {
    //         var windowHeight = window.innerHeight;
    //         var elementTop = reveals[i].getBoundingClientRect().top;
    //         var elementVisible = 150;

    //         if (elementTop < windowHeight - elementVisible) {
    //             reveals[i].classList.add("active");
    //         } else {
    //             // reveals[i].classList.remove("active");
    //         }
    //     }
    // }
    // window.addEventListener("scroll", reveal);
    return (
        <>
            <div className="container-fluid row cv" id="cv">

                <div className="cv-card reveal fade-left">
                    <div className="cv-headline">
                        <p>Bildung</p>
                    </div>

                    <ol className="cv-text">
                        <div>
                            <li className="cvList">
                                2011-2019
                            </li>
                            <div className="cvdiv">
                                Abitur - Staatliches Gymnasium Wilhelm von Humboldt
                            </div>
                        </div>

                        <div>
                            <li className="cvList">
                                2019-2023
                            </li>
                            <div className="cvdiv">
                                Bachelor Wirtschaftsinformatik - Universität Leipzig
                            </div>

                            <li className="cvList">
                                2023-dato
                            </li>
                            <div className="cvdiv">
                                Master Wirtschaftsinformatik - Universität Leipzig
                            </div>
                        </div>
                    </ol>
                </div>

                <div className="cv-card reveal fade-right">
                    <div className="container-fluid cv-headline">
                        <p>Praktika und Werksstudentenarbeit</p>
                    </div>

                    <ol className="cv-text">
                        <div>
                            <li className="cvList">
                                11.2021-04.2022
                            </li>
                            <div className="cvdiv">
                                Praktikum - <a href="https://www.gisa.de/">GISA GmbH</a>
                                powercloud, VBA, Angular, PHP
                            </div>
                        </div>

                        <div>
                            <li className="cvList">
                                05.2022-04.2023
                            </li>
                            <div className="cvdiv">
                                Werkstudent - <a href="https://www.gisa.de/">GISA GmbH</a>
                                PHP, Angular
                            </div>
                        </div>
                    </ol>
                </div>
            </div>
        </>

    );
}

export default Cv;