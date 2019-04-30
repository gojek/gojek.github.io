import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class GojekBlog extends Component {
  render() {
    return (
      <section className="first-section pt-3">
        <Helmet>
          <title> Why we ask for code- GO-JEK Product + Tech </title>
          <meta
            property="og:title"
            content="Why we ask for code- GO-JEK Product + Tech"
          />
          <meta
            name="twitter:title"
            content="Why we ask for code- GO-JEK Product + Tech"
          />
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="heading col-md-12 px-md-0">
              {/* <p className="text-success blog-date roboto-bold pt-4 mb-1">
                {' '}
                October 4, 2018
              </p> */}
              <h1 className="text-md-left text-black raleway-bold ">
                Why we ask for code
              </h1>
              <h6 className="roboto-regular pb-4 font-md ">
                When your ideal candidates make up just 0.5% of the job market,
                code is the best criteria to hire the right people.
              </h6>
            </div>
            <div className="px-4 px-md-0  ">
              <img
                className="img-fluid"
                src="../images/news/why-we-ask-for-code.jpeg"
                width="100%"
              />
              <div className="font-md roboto-regular text-dark">
                <p className="pt-4 ">
                  There is a reason the{' '}
                  <a
                    className=""
                    href="https://blog.codinghorror.com/why-cant-programmers-program/"
                    target="_blank"
                  >
                    fizz buzz
                  </a>{' '}
                  problem exists.
                </p>
                <p className="pt-2 ">
                  The hard truth is most people in the job market who claim to
                  be programmers, aren’t. As Reg Braithwaite and Joel Spolsky
                  attest — we’re talking about people who can’t write a simple
                  program. I tend to blame this one on traditional educational
                  approaches that kill the joy of coding, but that’s neither
                  here nor there.
                </p>

                <p className="pt-2 ">
                  At GOJEK, we’re looking for programmers who code for the
                  challenge and sheer pleasure of it. This means we’re only
                  targeting about 0.5% of the programmers in the job market.
                  Operationally, when we have thousands of applicants per
                  quarter, zeroing in on this 0.5% becomes hard. Extremely hard.
                </p>
                <blockquote className="blockquote font-md">
                  <p className="pt-2 roboto-bold">
                    This is precisely why we sift through an average of 3,000
                    resumes to hire a single developer. It’s also why our
                    250-strong engineering team has scaled 18+ products to over
                    a 100 million monthly orders sustainably. Lean Engineering
                    is something we take very seriously.
                  </p>
                </blockquote>

                <p className="pt-2">
                  Asking applicants to solve a simple programming problem is a
                  logical step in the filtration process. Our take home problem
                  is, quite literally, at the complexity of a high school CLI
                  programming exercise. We don’t require any frameworks or
                  libraries to be used outside of unit testing. We expect
                  standard Open Source conventions including git, file and dir
                  naming, dir structure, code cleanliness and appropriate build
                  automation. A horribly hacky solution would take an hour, max.
                  A clean one, depending on your definition of clean, 2 to 8
                  hours.
                </p>

                <p className="pt-2">
                  This is important to us, because EVERYONE at GOJEK codes.
                  Seniority does not preclude you from the basics of the job.
                  Because we believe,<span className="roboto-bold">
                    “Leaders who code are better judges of technical skill in
                    people.”
                  </span>{' '}
                  Check out our Engineering Principles for more.
                </p>

                <p className="pt-2">
                  To illustrate how simple this is, here’s what our guidelines
                  look like:
                </p>

                <p className="pt-2">
                  1. You have two full days to implement a solution.
                </p>

                <p className="pt-2">
                  2. We are really, really interested in your object-oriented or
                  functional design skills, so please craft the most beautiful
                  code you can.
                </p>

                <p className="pt-2">
                  3. Please ensure the coding conventions, directory structure
                  and build approach of the project follow the conventions set
                  by popular Open Source projects in the language you’re using.
                </p>

                <p className="pt-2">
                  4. You have to solve the problem in Ruby, Clojure, Java, Go or
                  any other language without using any external libraries except
                  for a testing library for Test-Driven Development (TDD) — a
                  simple console-based solution is all we expect.
                </p>

                <p className="pt-2">
                  5. Your solution must build+run on Linux.
                </p>

                <p className="pt-2">
                  6. Please use Git for version control. Frequent commits are a
                  huge plus.
                </p>

                <p className="pt-2">
                  7. Use standard build automation and dependency systems like
                  ant/maven/rake.
                </p>

                <p className="pt-2">
                  8. Please write comprehensive unit tests/specs. Additionally,
                  it’s a huge plus if you test drive your code.
                </p>

                <p className="pt-2">
                  All in all, asking for a simple coding solution helps us
                  filter applicants incredibly quickly and effectively. Only
                  ~20% make it through to the next round. ~50% simply don’t
                  submit a solution, and among those that do, about ~20% miss
                  basics like using git.
                </p>

                <p className="pt-2">
                  Most drop out not because we think their code is bad, but
                  because they fail fizz buzz. In fact, it’s so effective, from
                  the very next round — our ‘code pairing round’ — we’re done
                  with filtration and shift over to the selection stages of our
                  process. If you want a quick reckoner on how we go about our
                  recruitment, check<a
                    href="https://blog.gojekengineering.com/go-jek-recruitment-process-58dbed5d8992"
                    target="_blank"
                  >
                    {' '}
                    this post.
                  </a>
                </p>

                <p className="py-2">
                  We have no dearth of technical problems at GOJEK, and are
                  looking for hackers with strong, hands-on engineering skills
                  to join our team. The same team that has helped GOJEK become a
                  Super App with an ecosystem aided by 2 million driver partners
                  and 400,000 merchant partners. But why GOJEK? My colleague
                  explains. Visit superapp.is and help us move Southeast Asia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default GojekBlog
