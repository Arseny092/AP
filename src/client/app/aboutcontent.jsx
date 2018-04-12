import React from 'react';

import '../less/about.less';
import { Link } from 'react-router-dom';

class AboutContent extends React.Component {
    render() {
        return (
            <section className="about-content">
                <div className="about-us">
                    <p>Привет! Меня зовут Арсений, я сделал этот сайт для того, чтобы мы с женой могли
                        делиться творчеством с людьми (мы фотографы, да). Сюда планируем загружать только
                        по-настоящему интересные с нашей точки зрения работы. Так как фотография это
                        не только наше увлечение, но и обжигающая страсть, мы крайне
                        внимательно относимся ко всем нашим съемкам - будь это творчество, обычная
                        коммерческая история или серьезное мероприятие по созданию лукбука или
                        рекламной кампании. Врожденный перфекционизм, а также внимание к деталям и
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