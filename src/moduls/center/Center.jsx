import React from 'react'
import './Center.scss'

function Center() {
  return (
    <div className='about'>
		<div className="about__column">

            <p className="title-about-text">
                Центр гражданско-патриотического 
                <p>воспитания обучающихся НИУ «БелГУ»</p> 
            </p>

			<div className="about__column-info">
				<div className="about__column-info-adress">
					<p className='maintext'>Адрес:</p> 
					<p className='subtext'>г. Белгород, ул. Победы,</p> 
					<p className='subtext'>85, корп. 12, к.2-22</p> 
					<a className='subrules' href='https://bsuedu.ru/upload/iblock/183/pol-cgpv.pdf'>Положение о центре (утв.08.04.2019)</a> 
				</div>
				<div className="about__column-info-phone">
					<p className='maintext'>Телефон:</p> 
					<p className='subtext'>(4722) 24-54-49</p> 
				</div>
				<div className="about__column-info-director">
					<p className='maintext'>Директор:</p> 
					<p className='subtext'>Кузнецова Инна Вячеславовна</p> 
					<p className='subtext'>E-mail: Kuznetsova_IV@bsu.edu.ru</p> 
				</div>
				<div className="about__column-info-times">
					<p className='maintext'>Режим работы:</p> 
					<p className='subtext'>Понедельник – пятница с 9.00 до 18.00</p> 
					<p className='subtext'>Перерыв на обед с 13.00 до 14.00</p> 
				</div>
			</div>

            <p className='default-about-text'>
                Центр гражданско-патриотического воспитания обучающихся НИУ «БелГУ» является структурным подразделением университета, выступающим в 
                <p>качестве единой площадки, реализующей комплексный подход к гражданско-патриотическому воспитанию обучающихся НИУ «БелГУ», координацию</p> 
                <p>деятельности структурных подразделений, клубов, органов студенческого самоуправления, общественных организаций и иных объединений,</p>  
                <p>способствующих патриотическому воспитанию и гражданскому становлению студенческой молодежи университета.</p>  
            </p>

            <p className="title-about-text">
                Основная цель деятельности Центра
            </p>

            <p className='default-about-text'>
                Основной целью деятельности Центра гражданско-патриотического воспитания обучающихся НИУ «БелГУ» является формирование в университете 
                <p>системы гражданско-патриотического воспитания, направленной на укрепление и развитие у обучающихся патриотических качеств личности, российского</p> 
                <p>самосознания, активной гражданской позиции, уважения к культуре, традициям, истории России и населяющих ее народов, готовности к выполнению</p>  
                <p>конституционных обязанностей.</p>  
            </p>

            <div className="about__column-image">
                <img src={require('../../images/about.png')} alt="" />
                <p>Торжественное открытие центра (24.09.2018)</p> 
            </div>

            <p className="title-about-text">
                Задачи Центра
            </p>

            <ul className='about__column-tasks'>
                <li className='about__column-tasks-task task'>
                    создание условий для самореализации обучающихся в гражданско-патриотической 
                    <p>деятельности, увеличения количества участников патриотических мероприятий и акций;</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    использование различных форм работы, направленных на активизацию интереса 
                    <p>обучающихся к изучению истории Отечества, его героических и трагических страниц,</p> 
                    <p>знаменательных событий, ставших основой государственных праздников и памятных дат</p>
                    <p>России и Белгородской области;</p>
                </li>
                <li className='about__column-tasks-task task'>
                    популяризация подвигов героев и видных деятелей российской истории и культуры,  
                    <p>формирующих позитивный образ России;</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    воспитание у обучающихся глубокого уважения к государственным и региональным  
                    <p>символам, к символике НИУ «БелГУ»;</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    обеспечение сохранения и преумножения традиций университета, изучения и 
                    <p>популяризация истории становления и развития НИУ «БелГУ»;</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    развитие различных форм волонтерского движения и органов студенческого
                    <p>самоуправления гражданско-патриотической направленности, включая движение</p> 
                    <p>«Волонтеры Победы»;</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    содействие в повышении правового сознания, правовой культуры и электоральной 
                    <p>активности обучающихся;</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    координация деятельности студенческих клубов и объединений университета,
                    <p>способствующих гражданско-патриотическому и правовому воспитанию обучающихся;</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    поддержка социальной активности обучающихся, содействие развитию и реализации 
                    <p>инициатив студенческой молодежи в сфере воспитания гражданственности и патриотизма;</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    популяризация здорового образа жизни и участия обучающихся в сдаче норм  
                    <p>Всероссийского физкультурно-спортивного комплекса «Готов к труду и обороне»;</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    использование современных инструментов, форматов и технологий в реализации 
                    <p>гражданско-патриотического воспитания студенческой молодежи;</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    совершенствование форм и механизмов социального партнерства с образовательными
                    <p>организациями, учреждениями культуры, молодежными структурами, ветеранскими, иными</p> 
                    <p>общественными объединениями в утверждении патриотических ценностей в молодежной</p> 
                    <p>среде университета.</p> 
                </li>
            </ul>

            <div className="about__column-image">
                <img src={require('../../images/2about.png')} alt="" />
                <p>Героико-патриотическая акция «Самый длинный день в году»</p> 
            </div>

            <p className="title-about-text">
                Состав Совета Центра гражданско-патриотического воспитания
            </p>

            <ul className='about__column-tasks'>
                <li className='about__column-tasks-task task'>
                    Острикова Светлана Александровна - проректор по воспитательной работе и молодежной 
                    <p>политике, председатель Совета.</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    Тарабаева Виктория Борисовна - директор педагогического института, заместитель 
                    <p>председателя Совета.</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    Кузнецова Инна Вячеславовна - директор Центра гражданско-патриотического воспитания
                    <p>обучающихся НИУ «БелГУ», секретарь Совета.</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    Варфоломеева Маргарита Ивановна - директор департамента воспитательной деятельности.
                </li>
                <li className='about__column-tasks-task task'>
                    Питинов Юрий Никитович - председатель Совета ветеранов войны и труда НИУ «БелГУ» (по 
                    <p>согласованию).</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    Коняев Петр Григорьевич - участник Великой Отечественной войны, член Совета ветеранов
                    <p>войны и труда НИУ «БелГУ» (по согласованию).</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    Монастырева Валентина Анатольевна - директор Научной библиотеки им. Н.Н. Страхова.
                </li>
                <li className='about__column-tasks-task task'>
                    Денисова Ирина Викторовна - директор Музея истории НИУ «БелГУ».
                </li>
                <li className='about__column-tasks-task task'>
                    Цуканова Елена Юрьевна - заместитель директора по социально-воспитательной работе 
                    <p>юридического института.</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    Хорева Олеся Михайловна - заместитель директора по социально-воспитательной работе  
                    <p>педагогического института.</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    Иванова Лариса Леонидовна - начальник отдела социально-воспитательной работы
                    <p>медицинского института.</p> 
                </li>
                <li className='about__column-tasks-task task'>
                    Мережко Оксана Валерьевна - заместитель директора по социально-воспитательной работе
                    <p>Медицинского колледжа Медицинского института.</p>  
                </li>
                <li className='about__column-tasks-task task'>
                    Фисунова Наталья Викторовна - заместитель директора по социально-воспитательной
                    <p>работе института межкультурных коммуникаций и международных отношений.</p>  
                </li>
                <li className='about__column-tasks-task task'>
                    Андросова Анна Васильевна - заместитель директора по социально-воспитательной работе
                    <p>института экономики и управления.</p>  
                </li>
                <li className='about__column-tasks-task task'>
                    Митряйкина Антонина Михайловна - заместитель директора по социально-воспитательной
                    <p>работе Института наук о Земле.</p>  
                </li>
                <li className='about__column-tasks-task task'>
                    Гурьянова Ирина Владимировна - заместитель директора по социально-воспитательной
                    <p>работе института инженерных и цифровых технологий.</p>  
                </li>
                <li className='about__column-tasks-task task'>
                    Воробьева Оксана Владимировна - заместитель директора по социально-воспитательной
                    <p>работе института фармации, химии и биологии.</p>  
                </li>
                <li className='about__column-tasks-task task'>
                    Подпоринова Наталья Николаевна - заместитель директора по социально-воспитательной
                    <p>работе института общественных наук и массовых коммуникаций.</p>  
                </li>
                <li className='about__column-tasks-task task'>
                    Хижняк Светлана Владимировна - заместитель директора по социально-воспитательной
                    <p>работе инжинирингового колледжа.</p>  
                </li>
                <li className='about__column-tasks-task task'>
                    Фуникова Светлана Васильевна - заместитель декана по социально-воспитательной работе
                    <p>подготовительного факультета.</p>  
                </li>
                <li className='about__column-tasks-task task'>
                    Папков Андрей Игоревич - декан историко-филологического факультета педагогического
                    <p>института</p>  
                </li>
                <li className='about__column-tasks-task task'>
                    Прокопенко Сергей Николаевич - заместитель декана по социально-воспитательной работе
                    <p>историко-филологического факультета педагогического института.</p>  
                </li>
                <li className='about__column-tasks-task task'>
                    Дворецкий Евгений Владимирович - профессор кафедры всеобщей истории педагогического
                    <p>института</p>  
                </li>
                <li className='about__column-tasks-task task'>
                    Дворецкий Евгений Владимирович - профессор кафедры всеобщей истории педагогического
                    <p>института</p>  
                </li>
                <li className='about__column-tasks-task task'>
                    Мусина Валентина Егоровна - доцент кафедры педагогики педагогического института. 
                </li>
                <li className='about__column-tasks-task task'>
                    Кутько Виктория Васильевна - доцент кафедры теории государства и права юридического
                    <p>института, руководитель клуба молодого избирателя «Перспектива».</p>  
                </li>
                <li className='about__column-tasks-task task'>
                    Гукова Ирина Николаевна - доцент кафедры международных отношений и зарубежного
                    <p>регионоведения института межкультурной коммуникации и международных отношений,</p>  
                    <p>руководитель Клуба молодых политологов.</p>  
                </li>
                <li className='about__column-tasks-task task'>
                    Травин Роман Андреевич - ассистент кафедры международных отношений, зарубежного
                    <p>регионоведения и политологии института межкультурной коммуникации и международных</p>  
                    <p>отношений.</p>  
                </li>
                <li className='about__column-tasks-task task'>
                    Оробинский Андрей - председатель Союза студентов НИУ «БелГУ».
                </li>
                <li className='about__column-tasks-task task'>
                    Суворова Татьяна Николаевна - студентка 5 курса историко-филологического факультета
                    <p>педагогического института, волонтер Победы.</p>  
                </li>
            </ul> 

            <div className="about__column-image">
                <img src={require('../../images/star.png')} alt="" />
                <p>Студенческий флешмоб, посвященный Дню России</p> 
            </div>

		</div>
    </div>
  )
}

export {Center}
