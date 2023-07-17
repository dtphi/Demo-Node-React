import Link from "next/link"

export default function En001 () {
    return (
        <div>
            <h2 className="text-center">
                <Link href="https://learnenglish.britishcouncil.org/skills/listening/a1-listening/request-your-boss">Learn English</Link>
            </h2>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        English Script #001
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            <p><label className="text-uppercase text-secondary">Susanne:</label> Hi, Mario. Can you help me prepare some things for the next month?</p>
                            <p><label className="text-uppercase text-secondary">Mario:</label> OK, sure. What can I help you with?</p>
                            <p><label className="text-uppercase text-secondary">Susanne:</label> I need to visit the customer in Germany. It's important.</p>
                            <p><label className="text-uppercase text-secondary">Mario:</label> What can I do to help?</p>
                            <p><label className="text-uppercase text-secondary">Susanne:</label> Can you send an email to the customer? Ask them when I can visit them next week. Please do this first. It's a priority and very urgent.</p>
                            <p><label className="text-uppercase text-secondary">Mario:</label> Right. I'll do it today.</p>
                            <p><label className="text-uppercase text-secondary">Susanne:</label> Thanks. This next task is also important. Can you invite everyone to the next team meeting?</p>
                            <p><label className="text-uppercase text-secondary">Mario:</label> Yes, I will.</p>
                            <p><label className="text-uppercase text-secondary">Susanne:</label> But first you need to book a meeting room. After that, please send everyone an email about it.</p>
                            <p><label className="text-uppercase text-secondary">Mario:</label> Yes, of course.</p>
                            <p><label className="text-uppercase text-secondary">Susanne:</label> And finally, can you write a short report about our new project? I have to give a presentation to our managers next month. Please do it when you have time – sometime in the next two or three weeks. It's not too urgent.</p>
                            <p><label className="text-uppercase text-secondary">Mario:</label> Sure, no problem. I can do it this week.</p>
                            <p><label className="text-uppercase text-secondary">Susanne:</label> There's no hurry. Take your time.</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}