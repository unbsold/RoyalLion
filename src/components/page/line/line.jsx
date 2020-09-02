import React from 'react';
import './style.scss';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import Match from '../../elements/match/match';



const Line = () => {
  return(

    <section className="line">
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

export default Line
