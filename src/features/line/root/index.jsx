import React from 'react'
import './index.scss'

import {Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core/'

import Match from './../../../ui/match-info';

const matches = [{
  date: new Date(),
  team1: 'Команда 1',
  team2: 'Команда 2',
  cf1: '2.37',
  cf2: '2.37',
  cf3: '2.37',
  cf4: '2.37',
  cf5: '2.37',
  cf6: '2.37'
}]

export const Line = () => {
  return(
    <section className="line">
      <div className="container">
          <Accordion>
            <AccordionSummary
              expandIcon={<i className="icon-chevron-down"></i>}
            >
              Table Soccer League
            </AccordionSummary>
            <AccordionDetails>
              {matches.map(match =>
                <Match
                  date={match.date}
                  team1={match.team1}
                  team2={match.team2}
                  cf1={match.cf1}
                  cf2={match.cf2}
                  cf3={match.cf3}
                  cf4={match.cf4}
                  cf5={match.cf5}
                  cf6={match.cf6}
                />
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<i className="icon-chevron-down"></i>}
            >
              Table Soccer League
            </AccordionSummary>
            <AccordionDetails>
              <Match />
              <Match />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<i className="icon-chevron-down"></i>}
            >
              Table Soccer League
            </AccordionSummary>
            <AccordionDetails>
              <Match />
              <Match />
              <Match />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<i className="icon-chevron-down"></i>}
            >
              Table Soccer League
            </AccordionSummary>
            <AccordionDetails>
              <Match />
              <Match />
              <Match />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<i className="icon-chevron-down"></i>}
            >
              Table Soccer League
            </AccordionSummary>
            <AccordionDetails>
              <Match />
              <Match />
              <Match />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<i className="icon-chevron-down"></i>}
            >
              Table Soccer League
            </AccordionSummary>
            <AccordionDetails>
              <Match />
              <Match />
              <Match />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<i className="icon-chevron-down"></i>}
            >
              Table Soccer League
            </AccordionSummary>
            <AccordionDetails>
              <Match />
              <Match />
              <Match />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<i className="icon-chevron-down"></i>}
            >
              Table Soccer League
            </AccordionSummary>
            <AccordionDetails>
              <Match />
              <Match />
              <Match />
            </AccordionDetails>
          </Accordion>
      </div>

    </section>
  )
}
