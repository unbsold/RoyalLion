import React from 'react'
import './index.scss'

import {Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core/'

import Match from './../../../ui/match-info';

export const Live = () => {
  return(
    <section className="line live">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="live-label">
              <div className="live-icon">
                <img src="img/live.svg" alt=""/>
              </div>
              В прямом эфире
            </div>
          </div>
        </div>
      </div>
      <div className="container">
          <Accordion expanded>
            <AccordionSummary
              expandIcon={<i className="icon-chevron-down"></i>}
            >
              Table Soccer League
            </AccordionSummary>
            <AccordionDetails>
              <Match />
              <Match />
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
