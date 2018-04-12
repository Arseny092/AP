import React from 'react';

import '../less/about.less';
import { Link } from 'react-router-dom';

class AboutContent extends React.Component {
    render() {
        return (
            <section className="about-content">
                <div className="about-us">
                    <p>Привет! Меня зовут Арсений, я сделал этот сайт для того, чтобы нам с женой было
                        удобнее делиться творчеством с людьми (мы фотографы, да). Сюда будем загружать только
                        по-настоящему интересные с нашей точки зрения работы. Так как фотография это
                        не только наше сильное увлечение, но и обжигающая страсть, мы крайне
                        внимательно относимся ко всем нашим съемкам - будь это творчество, обычная
                        коммерческая съемка или серьезное мероприятие по созданию лукбука или
                        рекламной кампании. В паре с врожденным перфекционизмом, внимание к деталям и
                        образам позволяет нам всегда добиваться требуемого результата.
                    </p>

                    <p className="about-us-portf">Здесь вы можете посмотреть наше портфолио:</p>

                    <p className="about-us-btn"><Link to='/portfolio'>Portfolio</Link></p>

                    <p className="about-us-slogan">Photography Bonny&amp;Clyde</p>

                </div>
            </section>
        );
    }
}

export default AboutContent;