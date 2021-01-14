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
      baseURL: 'https://ridatadiscoverycenter.github.io/',
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
      contact_email: 'ridatadiscoverycenter@brown.edu',
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
              'Graduate School of Oceanography, University of Rhode Island'
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
        image: 'Image Data',
        oceonographic: 'Oceanographic Data',
        time: 'Time Series Data'
      },
      buoy_locations: {
        name: 'Buoy Locations',
        description:
          'Here you can find the location and ohter information about the buoys and stations where we collect data.',
        text:
          'Buoys were equipped with two sondes that measured temperature, salinity, dissolved oxygen and depth at approximately 1 meter from the bottom and 0.5 meters below the surface. In addition, chlorophyll fluorescence was measured by the near surface sonde. Measurements were collected at fifteen minute intervals and transmitted to shore via cellular modems every eight hours or via radio signal every fifteen minutes.',
        source: 'http://www.narrbay.org/d_projects/buoy/buoydata.htm'
      },
      buoy_data_viewer: {
        name: 'Narragansett Bay Data Explorer',
        beta: true,
        description:
          'Explore historical and real-time data about water quality, temperature, and more from the Narragansett Bay. The new Narragansett Bay Data Explorer is in beta, if you find issues leave us a comment or open an issue on the GitHub repo linked below. You can still use the old Buoy Viewer.',
        secondUrl: 'http://pbuoycit.services.brown.edu/buoyportal',
        second: 'Buoy Viewer',
        url: 'https://data-explorer.riddc.brown.edu',
        third: 'GitHub Repo',
        thirdUrl: 'https://github.com/ridatadiscoverycenter/buoy-viewer-nuxt'
      },
      erddap: {
        name: 'ERDDAP Server',
        description:
          'ERDDAP is a data server that gives you a simple, consistent way to download subsets of gridded and tabular scientific datasets in common file formats and make graphs and maps.',
        url: 'https://pricaimcit.services.brown.edu/erddap/index.html'
      },
      plankton: {
        name: 'Narragansett Bay Long-Term Plankton Time Series',
        description:
          'Narragansett Bay Long-Term Plankton Time Series is one of the world’s longest-running plankton surveys. Beginning in 1957, weekly samples have been collected to assess the phytoplankton community and characterize the physical parameters of Narragansett Bay.',
        url: 'https://web.uri.edu/gso/research/plankton/'
      },
      jupyterbook: {
        name: 'RIDDC Data Articles',
        description:
          'A collection of articles and jupyter notebooks with stories, exploratory data analyses, and code examples using our ERDDAP server data.',
        url: 'https://riddc-jupyter-book.web.app'
      },
      buoy: {
        locations: 'Buoy Locations',
        owners: 'Buoy Owners',
        data: [
          {
            label: 'SP',
            BART_label: 'B1',
            name: 'South Prudence',
            operator: 'URI/GSO',
            owner: 'URI/GSO',
            station_type: 'Buoy',
            status: 'Not active',
            dates_stabilisehd: '2001-2002',
            season: 'extended season',
            latitude: 41.5911,
            longitude: -71.3426
          },
          {
            label: 'NP',
            BART_label: 'B2',
            name: 'North Prudence',
            operator: 'URI/GSO',
            owner: 'RI DEM-OWR',
            station_type: 'Buoy',
            status: 'Active',
            dates_stabilisehd: '1999, 2001-present',
            season: 'Summer seasonal (may-oct)',
            latitude: 41.6708,
            longitude: -71.3549
          },
          {
            label: 'CP',
            BART_label: 'B3',
            name: 'Conimicut Pt',
            operator: 'URI/GSO',
            owner: 'RI DEM-OWR',
            station_type: 'Buoy',
            status: 'Active',
            dates_stabilisehd: '2003, 2005-present',
            season: 'Summer seasonal (may-oct)',
            latitude: 41.7128,
            longitude: -71.3437
          },
          {
            label: 'UB',
            BART_label: 'B3W',
            name: 'Winter Station',
            operator: 'URI/GSO',
            owner: 'URI/GSO',
            station_type: 'Buoy',
            status: 'Active',
            dates_stabilisehd: '2008-present (winter only)',
            season: 'winter season only',
            latitude: 41.7115,
            longitude: -71.3379
          },
          {
            label: 'BR',
            BART_label: 'B4',
            name: 'Bullocks Reach',
            operator: 'NBC',
            owner: 'NBC',
            station_type: 'Buoy',
            status: 'Active',
            dates_stabilisehd: '2001-present',
            season: 'Summer seasonal (may-oct)',
            latitude: 41.731,
            longitude: -71.3653
          },
          {
            label: 'MV',
            BART_label: 'B6',
            name: 'Mt View',
            operator: 'URI/GSO',
            owner: 'RI DEM-OWR',
            station_type: 'Buoy',
            status: 'Active',
            dates_stabilisehd: '2004-present',
            season: 'Summer seasonal (may-oct)',
            latitude: 41.6385,
            longitude: -71.3909
          },
          {
            label: 'QP',
            BART_label: 'B7',
            name: 'Quonset Pt',
            operator: 'URI/GSO',
            owner: 'RI DEM-OWR',
            station_type: 'Buoy',
            status: 'Active',
            dates_stabilisehd: '2005-present',
            season: 'Summer seasonal (may-oct)',
            latitude: 41.5903,
            longitude: -71.38
          },
          {
            label: 'MH',
            BART_label: 'B12',
            name: 'Mt Hope Bay',
            operator: 'URI/GSO',
            owner: 'RI DEM-OWR',
            station_type: 'Buoy',
            status: 'Active',
            dates_stabilisehd: '2005-present',
            season: 'Summer seasonal (may-oct)',
            latitude: 41.6799,
            longitude: -71.2156
          },
          {
            label: 'PP',
            BART_label: 'B13',
            name: 'Poppasquash Pt',
            operator: 'URI/GSO',
            owner: 'RI DEM-OWR',
            station_type: 'Buoy',
            status: 'Active',
            dates_stabilisehd: '2004-present',
            season: 'Summer seasonal (may-oct)',
            latitude: 41.6492,
            longitude: -71.3181
          },
          {
            label: 'SR',
            BART_label: 'B14',
            name: 'Sally Rock',
            operator: 'URI/GSO',
            owner: 'RI DEM-OWR',
            station_type: 'Buoy',
            status: 'Active',
            dates_stabilisehd: '2008-present',
            season: 'Summer seasonal (may-oct)',
            latitude: 41.676,
            longitude: -71.4243
          },
          {
            label: 'TW',
            BART_label: 'F3',
            name: 'T-Wharf',
            operator: 'NBNERR',
            owner: 'NBNERR',
            station_type: 'Land/Dock',
            status: 'Active',
            dates_stabilisehd: '2004-present',
            season: 'year round',
            latitude: 41.5789,
            longitude: -71.3215
          },
          {
            label: 'PD',
            BART_label: 'F4',
            name: 'Phillipsdale',
            operator: 'NBC',
            owner: 'NBC',
            station_type: 'Land/Dock',
            status: 'Active',
            dates_stabilisehd: '2004-present',
            season: 'extended season',
            latitude: 41.8418,
            longitude: -71.372
          },
          {
            label: 'GB',
            BART_label: 'F5',
            name: 'Greenwich Bay',
            operator: 'URI/GSO',
            owner: 'RI DEM-OWR',
            station_type: 'Land/Dock',
            status: 'Active',
            dates_stabilisehd: '2009-present',
            season: 'seasonal',
            latitude: 41.6861,
            longitude: -71.4459
          },
          {
            label: 'PC',
            BART_label: 'F6',
            name: 'Potters Cove',
            operator: 'NBNERR',
            owner: 'NBNERR',
            station_type: 'Land/Dock',
            status: 'Active',
            dates_stabilisehd: '1995-present',
            season: 'extended season',
            latitude: 41.6406,
            longitude: -71.3411
          },
          {
            label: 'GD',
            BART_label: 'F7',
            name: 'GSO Dock',
            operator: 'URI/GSO',
            owner: 'URI/GSO',
            station_type: 'Land/Dock',
            status: 'Active',
            dates_stabilisehd: '1995-present',
            season: 'year round',
            latitude: 41.4922,
            longitude: -71.4189
          },
          {
            label: 'CR',
            BART_label: 'CR',
            name: 'Cole River',
            operator: 'URI/GSO',
            owner: 'MA DEP',
            station_type: 'Buoy',
            status: 'Active',
            dates_stabilisehd: '2016-present',
            season: 'seasonal',
            latitude: 41.7015,
            longitude: -71.2154
          },
          {
            label: 'TR',
            BART_label: 'TR',
            name: 'Taunton River',
            operator: 'URI/GSO',
            owner: 'MA DEP',
            station_type: 'Buoy',
            status: 'Active',
            dates_stabilisehd: '2016-present',
            season: 'seasonal',
            latitude: 41.7009,
            longitude: -71.1877
          },
          {
            label: 'GB-old',
            BART_label: 'F5-old',
            name: 'Greenwich Bay',
            operator: 'NBNERR, URI/GSO',
            owner: 'RI DEM-OWR',
            station_type: 'Land/Dock',
            status: 'Not active',
            dates_stabilisehd: '2004-2006 (seasonal) 2007-2008 year round',
            season: 'seasonal, year round',
            latitude: 41.6848,
            longitude: -71.446
          }
        ]
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
