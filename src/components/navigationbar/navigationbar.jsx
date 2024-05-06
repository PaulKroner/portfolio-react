import "./navigationbar.css";

const NavigationBar = () => {

    function burgerChange(x) {
        // x.classList.toggle("change");
        console.log("clicked")
    }

    // const sidebar = document.querySelector('.sidebar'),
    //     toggle = document.querySelector('.burger');

    // toggle.addEventListener("click", () => {
    //     sidebar.classList.toggle("close");
    // })

    return (
        <div class="sidebar close">
            <div class="sidebar-top">

                <div class="mobile-burger-bar">
                    <div class="burger" onclick={burgerChange()}>
                        <div class="barbox">
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                            <div class="bar3"></div>
                        </div>
                    </div>
                </div>

                <div class="hreflinks-top">
                    <div class="hreflinks-top-box">
                        <li class="hrefsymbols">
                            <a href="#main-container">
                                <i class='bx bx-home-alt icon'></i>
                                <div class="text">Home</div>
                            </a>
                        </li>

                        <li class="hrefsymbols">
                            <a href="#cv">
                                <i class='bx bx-user icon'></i>
                                <div class="text">Lebenslauf</div>
                            </a>
                        </li>

                        <li class="hrefsymbols">
                            <a href="#projects">
                                <i class='bx bx-code icon'></i>
                                <div class="text">Projekte</div>
                            </a>
                        </li>

                        <li class="hrefsymbols">
                            <a href="#skills">
                                <i class='bx bx-bar-chart-alt-2 icon'></i>
                                <div class="text">Skills</div>
                            </a>
                        </li>
                    </div>
                </div>
            </div>
            <div class="sidebar-bottom">

                <div class="hreflinks-bottom ">
                    <div class="hreflinks-top-box">
                        <li class="hrefsymbols">
                            <a href="https://github.com/PaulKroner">
                                <i class='bx bxl-github icon'></i>
                                <div class="text">GitHub</div>
                            </a>
                        </li>

                        <li class="hrefsymbols">
                            <a href="https://www.linkedin.com/in/paul-kr%C3%B6ner/">
                                <i class='bx bxl-linkedin-square icon'></i>
                                <div class="text">LinkedIn</div>
                            </a>
                        </li>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavigationBar;