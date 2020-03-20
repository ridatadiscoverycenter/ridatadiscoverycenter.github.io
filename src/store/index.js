import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    names: {
      riddc: 'Rhode Island Data Discovery Center',
      ricaim:
        'Rhode Island Consortium for Coastal Ecology Assessment, Innovation & Modeling'
    },
    funding:
      'This material is based upon work conducted by the Rhode Island Consortium for Coastal Ecology Assessment, Innovation & Modeling (RI C-AIM), and supported in full by the National Science Foundation EPSCoR Cooperative Agreement 1655221. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.',
    application: {
      title: 'Rhode Island Data Discovery Center',
      subtitle:
        'Explore our collection of present and historical data from the Narragansett Bay.',
      menu: {
        home: 'Home',
        resources: 'Resources',
        about: 'About'
      },
      titles: {
        highlights: 'Highlights',
        collaborators: 'Collaborators'
      }
    },
    map: {},
    about: {
      text:
        'The National Science Foundation in 2017 awarded the University of Rhode Island with a grant to establish a statewide research consortium — the RI Consortium for Coastal Ecology Assessment, Innovation, and Modeling (RI C-AIM) — to study the effects of climate variability on coastal ecosystems. The RI Data Discovery Center is one of the efforts of RI C-AIM consortium. The goal of the RI Data Discovery Center is to become the national and international go-to-source for data on the Narragansett Bay ecosystem. For C-AIM investigators pursuing the research goals of the Integrated Bay Observatory, Predicting Ecosystem Response and Visualization & Imaging, RI Data Discovery Center will become the site where they will store their data, share their data internally with other C-AIM investigators and share their data externally with investigators around the world. In addition to new data collected by C-AIM investigators, RI Data Discovery Center will also collect and share historical data on the Narragansett Bay ecosystem. In addition to sharing data with scientists, RIDDC will also become the go-to-source where decision makers, land-use managers, relevant industries, citizen scientists and students can find data on the Narragansett Bay ecosystem.',
      'contact-email': 'ridatadiscoverycenter@brown.edu',
      leads: {
        text: 'leads',
        leads: [
          {
            name: 'Dr. Geoffrey Bothun',
            title: 'RI NSF EPSCoR Principal Investigator',
            institution:
              'Department of Chemical Engineering, University of Rhode Island'
          },
          {
            name: 'Dr. Jeffrey Morgan',
            title: '',
            institution:
              'Department of Molecular Pharmacology, Physiology & Biotechnology, Brown University'
          },
          {
            name: 'Dr. Lewis Rothstein',
            title: '',
            institution:
              'DGraduate School of Oceanography, University of Rhode Island'
          },
          {
            name: 'Dr. Breea Govenar',
            title: '',
            institution: 'Biology Department, Rhode Island College'
          },
          {
            name: 'Neal Overstrom',
            title: '',
            institution: 'Nature Laboratory, Rhode Island School of Design'
          },
          {
            name: 'Dr. Bethany Jenkins',
            title: '',
            institution:
              'Department of Cell and Molecular Biology, University of Rhode Island'
          },
          {
            name: 'Dr. Baylor Fox-Kemper',
            title: '',
            institution:
              'Department of Earth, Environmental, & Planetary Sciences, Brown University'
          }
        ]
      }
    },
    resources: {
      data: {
        narr_bay: 'Narragansett Bay Buoy',
        water: 'Water Quality Data',
        image: 'Image Data'
      },
      buoy_data_viewer: {
        name: 'Buoy Data Viewer',
        description:
          'Explore historical and real-time data about water quality, temerature, and more from the Narragansett Bay.',
        url: ''
      },
      erddap: {
        name: 'ERDDAP Server',
        url: ''
      },
      omero: {
        name: 'OMERO Server',
        url: ''
      },
      buoy: {
        locations: 'Buoy Locations',
        owners: 'Buoy Owners'
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
