import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
            <section className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-12">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                    <div className="col-md-12">
                        <div className="about-desc">
                        <span className="heading-meta">About Me</span>
                        <h2 className="colorlib-heading">Who Am I?</h2>
                        <p> Human | Engineering leader | Microservices | Managed Services | Serverless | Azure IoT | Data Engineering | Serverless | NestJS | NoSQL | NodeJS | Typescript </p>
                        <p> Iam a energetic software engineer with a passion to drive business value through innovation and operational excellence delivering superior engineering solutions at scale. </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="colorlib-about">
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">What I do?</span>
                    <h2 className="colorlib-heading">Here are some of my expertise</h2>
                </div>
                </div>
                <div className="row row-pt-md">
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                    <span className="icon">
                        <i className="icon-bulb" />
                    </span>
                    <div className="desc">
                        <h3> Microservices / Backend Development</h3>
                        <p> Designed scalable microservices </p>
                        <p> Advocate of code reviews, TDD, DDD </p>
                        <p> Hands-on in architecting/automating and optimising mission critical microservices </p>
                        <p> Expertise in helm charts, Kubernetes, CI/CD </p>
                        <p> Tech stack used - NestJS, Typescript, NodeJS  </p>
                        <p> Guide/help team members to understand various Azure IoT managed services </p>
                        <p> Strive for quality engineering product using practices like CI/CD, Pre commit hooks, TDD, DDD, Code analysis etc.</p>
                        <p> Developed serverless RESTful api's using AWS managed services </p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-3">
                    <span className="icon">
                        <i className="icon-open" />
                    </span>
                    <div className="desc">
                        <h3> Open source software advocate</h3>
                        <p> Contribute to open source community through platforms like Medium, Github, StackOverflow etc. </p>
                        <p> Explore new technologies and provide MVP/POC's to help team in providing best solutions to software engineering problems</p>
                        <p> Motivate team members to learn new technologies and contribute back to community</p>
                        <p> Some of my interests in tech stack - IoT, NestJS, Javascript, React-Native, Node.js, NoSql databases, Kubernetes </p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-5">
                    <span className="icon">
                        <i className="icon-cloud-storage" />
                    </span>
                    <div className="desc">
                        <h3>Azure IoT</h3>
                        <p> Expertise in designing IoT solutions </p>
                        <p> Hands on - IoT edge computing, Event hub, IoT hub, Event Grid, Stream Analytics, Device Provisioning Service, Azure Device & Service sdk, IoT central </p>
                        <p> Designed and buit end to end IoT solutions </p>
                        <p> Provide/derive meaningful insights from IoT data to customers  </p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-5">
                    <span className="icon">
                        <i className="icon-phone" />
                    </span>
                    <div className="desc">
                        <h3>iOS apps development</h3>
                        <p> 6+ years of iOS application development </p>
                        <p> Worked on with Swift, Objective C, iOS and MACOSX. </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
          </div>
        )
    }

}