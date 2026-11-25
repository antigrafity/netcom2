/*
 * Netcom Scinergy — product & service range.
 *
 * Adding something new: add an object to NC_RANGE.items.
 *   key     unique, lowercase, no spaces (used in item.html?key=...)
 *   group   one of the NC_RANGE.groups keys
 *   kind    'Hardware' | 'Software' | 'Service'
 *   title, summary, body, includes[], fits[], specs[[label, value]]
 *   img     path under assets/ (optional)
 *   page    link to a full page instead of item.html (optional)
 */
window.NC_RANGE = {
  groups: [
    { key: 'software', title: 'Software', note: 'Applications we build, license, and connect.' },
    { key: 'infra', title: 'Infrastructure & Cloud', note: 'Servers, storage, power, and cloud platforms.' },
    { key: 'network', title: 'Network & Devices', note: 'Cabling, Wi-Fi, cameras, rooms, and sensors.' },
    { key: 'security', title: 'Security', note: 'Firewalls, secure access, and endpoint protection.' },
    { key: 'engineering', title: 'Engineering Services', note: 'Surveys, installation, hosting, and maintenance.' }
  ],
  items: [
    { key: 'app-dev', group: 'software', kind: 'Service', title: 'Software & App Development', img: 'assets/svc-software-platforms.jpg', page: 'services/software-platforms.html',
      summary: 'Web applications, mobile apps, and APIs built to a signed-off specification, with source code handed over.' },
    { key: 'integration', group: 'software', kind: 'Service', title: 'Integration & Migration', img: 'assets/svc-systems-integration.jpg', page: 'services/systems-integration.html',
      summary: 'Connecting systems that don’t share data, and moving servers, data, and applications without stopping work.' },
    { key: 'licenses', group: 'software', kind: 'Software', title: 'Business Software Licenses', img: 'assets/svc-design.jpg',
      summary: 'Operating systems, databases, virtualization, and office suites, sourced, registered, and renewed on time.',
      body: 'Licensing is easy to get wrong: too few seats and you are out of compliance, too many and you are paying for nothing. We supply the licenses your environment needs, register them to your company, install them, and track renewal dates so nothing lapses.',
      includes: ['Server and desktop operating systems', 'Database and virtualization licenses', 'Office and collaboration suites', 'License inventory and renewal tracking', 'Installation and activation'],
      fits: ['New servers that need OS and database licenses', 'Companies preparing for a software audit', 'Teams moving from perpetual to subscription licensing'],
      specs: [['Delivery', 'Electronic, registered to your company'], ['Renewals', 'Tracked and quoted before expiry']] },

    { key: 'cloud', group: 'infra', kind: 'Service', title: 'Data Center & Cloud', img: 'assets/svc-infrastructure.jpg', page: 'services/infrastructure.html',
      summary: 'Server rooms, virtualization, and hybrid cloud, sized from measured usage and built so one failure doesn’t stop everything.' },
    { key: 'servers', group: 'infra', kind: 'Hardware', title: 'Rack & Tower Servers', img: 'assets/svc-infrastructure.jpg',
      summary: 'Servers from major manufacturers, configured with redundant power and disks, racked and tested on site.',
      body: 'We size servers from what your applications actually use, then supply, rack, cable, and configure them with the operating system and management tools ready. Every unit is burn-in tested before it carries production work.',
      includes: ['Rack and tower servers', 'Redundant power supplies and disks', 'Remote management configured', 'Racking, cabling, and labeling', 'Burn-in and acceptance testing'],
      fits: ['Replacing servers past warranty', 'New branch or plant server rooms', 'Virtualization hosts'],
      specs: [['Form factors', '1U, 2U, tower'], ['Warranty', 'Manufacturer warranty, claims handled by us'], ['Setup', 'Installed and tested on site']] },
    { key: 'storage', group: 'infra', kind: 'Hardware', title: 'Storage & Backup Appliances', img: 'assets/svc-application-delivery.jpg',
      summary: 'NAS, SAN, and backup appliances with snapshots and off-site copies, sized for growth.',
      body: 'Running out of disk space and untested backups cause more outages than almost anything else. We supply storage and backup appliances sized for the next few years, set up snapshots and off-site copies, and prove recovery with a test restore.',
      includes: ['NAS and SAN storage', 'Backup appliances and software', 'Snapshot and replication setup', 'Off-site or cloud copy', 'Documented restore test'],
      fits: ['File servers that keep filling up', 'Companies with no tested backup', 'Recovery copies for a second site'],
      specs: [['Capacity', 'Sized from current use plus growth'], ['Recovery', 'Restore tested before handover']] },
    { key: 'power', group: 'infra', kind: 'Hardware', title: 'UPS & Server Room Cooling', img: 'assets/svc-design.jpg',
      summary: 'UPS units, power distribution, precision cooling, and room monitoring for server rooms of any size.',
      body: 'A server room is only as reliable as its power and cooling. We measure the load, supply UPS and cooling units with headroom, install power distribution, and add temperature and humidity monitoring that alerts before things overheat.',
      includes: ['Online UPS units and batteries', 'Rack power distribution', 'Precision or split cooling', 'Temperature and humidity sensors', 'Load calculation and documentation'],
      fits: ['Server rooms that run hot', 'Sites with frequent power dips', 'New server room fit-outs'],
      specs: [['Sizing', 'Based on measured load'], ['Monitoring', 'Alerts by email or message']] },

    { key: 'network-systems', group: 'network', kind: 'Service', title: 'Network, IoT & Building Systems', img: 'assets/svc-connectivity.jpg', page: 'services/connectivity.html',
      summary: 'Survey-led design of cabling, Wi-Fi, branch links, and the devices that run on them.' },
    { key: 'switching', group: 'network', kind: 'Hardware', title: 'Switches & Wi-Fi Access Points', img: 'assets/svc-connectivity.jpg',
      summary: 'Managed switches and enterprise access points, placed from a site survey and tested for coverage.',
      body: 'We choose switches and access points to fit the building and the number of users, place them from survey measurements, configure segmentation, and test coverage on every floor before handover.',
      includes: ['Managed and PoE switches', 'Enterprise Wi-Fi access points and controllers', 'VLAN and guest network setup', 'Coverage testing report', 'Configuration backup'],
      fits: ['Offices with Wi-Fi dead spots', 'Warehouses using handheld scanners', 'New floors or buildings'],
      specs: [['Survey', 'Before and after installation'], ['Handover', 'Diagrams and configuration backup']] },
    { key: 'cctv', group: 'network', kind: 'Hardware', title: 'IP Cameras & Door Access', img: 'assets/proj-monitoring.jpg',
      summary: 'IP cameras, recorders, door access, and visitor systems on their own secure network segment.',
      body: 'Cameras and door controllers are network devices and should be treated like them. We design camera placement and access points, install recorders and controllers, and keep them on a separate network segment so they don’t become a weak point.',
      includes: ['IP cameras and network video recorders', 'Card, PIN, or face access readers', 'Visitor registration', 'Separate network segment', 'Retention and access settings'],
      fits: ['Offices and factories', 'Warehouses and depots', 'Buildings with several entrances'],
      specs: [['Recording', 'Retention set to your policy'], ['Network', 'Isolated from office traffic']] },
    { key: 'rooms', group: 'network', kind: 'Hardware', title: 'Meeting Room Kits', img: 'assets/svc-design.jpg',
      summary: 'Cameras, speakers, displays, and booking panels for rooms that work the moment people walk in.',
      body: 'We kit out meeting rooms with the right camera, microphones, and display for the room size, connect them to your video platform, add booking panels if needed, and test every room before handing over.',
      includes: ['Conference cameras and microphones', 'Displays and mounting', 'Room booking panels', 'Video platform setup', 'Per-room acceptance test'],
      fits: ['Boardrooms and huddle rooms', 'Training rooms', 'Head office fit-outs'],
      specs: [['Room sizes', 'Huddle to boardroom'], ['Platforms', 'Major video conferencing services']] },
    { key: 'iot-kit', group: 'network', kind: 'Hardware', title: 'IoT Gateways & Sensors', img: 'assets/proj-monitoring.jpg',
      summary: 'Sensors for temperature, power, vibration, and environment, connected through gateways to one monitoring screen.',
      body: 'We pick sensors that suit the equipment and the site, install gateways that work with your network or mobile data, and set alert rules so the right person hears about a problem before it becomes a stoppage.',
      includes: ['Temperature, humidity, power, and vibration sensors', 'Wired and wireless gateways', 'Monitoring dashboard', 'Alert rules by email or message', 'Installation and calibration'],
      fits: ['Cold storage and server rooms', 'Production machines', 'Remote equipment'],
      specs: [['Connectivity', 'Ethernet, Wi-Fi, or mobile data'], ['Alerts', 'Email or message']] },

    { key: 'firewall', group: 'security', kind: 'Hardware', title: 'Firewalls & Secure Remote Access', img: 'assets/svc-application-delivery.jpg',
      summary: 'Next-generation firewalls, VPN, and secure remote access for staff and vendors.',
      body: 'We supply and configure firewalls sized for your traffic, set up segmentation between office, guest, and device networks, and give staff and vendors secure remote access with multi-factor login.',
      includes: ['Next-generation firewalls', 'Site-to-site and remote VPN', 'Network segmentation', 'Multi-factor login for remote access', 'Rule review and documentation'],
      fits: ['Head offices and branches', 'Vendors who need remote access', 'Replacing consumer-grade routers'],
      specs: [['Sizing', 'Based on measured traffic'], ['Reviews', 'Rule review on request']] },
    { key: 'endpoint', group: 'security', kind: 'Software', title: 'Endpoint & Email Security', img: 'assets/svc-systems-integration.jpg',
      summary: 'Antivirus, device encryption, and email filtering, rolled out and managed centrally.',
      body: 'Most incidents start on a laptop or in an inbox. We supply and deploy endpoint protection and email filtering across your devices, enable encryption, and set up central reporting so alerts are seen and handled.',
      includes: ['Endpoint protection licenses', 'Email filtering', 'Disk encryption', 'Central console and reporting', 'Deployment to all devices'],
      fits: ['Companies with mixed or expired antivirus', 'Teams handling sensitive data', 'Preparing for an audit'],
      specs: [['Licensing', 'Per device or per user'], ['Management', 'Central console']] },

    { key: 'support', group: 'engineering', kind: 'Service', title: 'Hosting, Security & Support', img: 'assets/svc-application-delivery.jpg', page: 'services/application-delivery.html',
      summary: 'Hosting, monitoring, patching, and maintenance contracts that keep systems running after go-live.' },
    { key: 'survey', group: 'engineering', kind: 'Service', title: 'Site Survey & Technical Review', img: 'assets/svc-design.jpg',
      summary: 'An engineer visits, measures, and documents what you have, then tells you what to fix first.',
      body: 'Before buying anything, it helps to know exactly what is there. An engineer surveys your site, systems, and network, measures performance and capacity, and gives you a written report with findings and priorities.',
      includes: ['On-site visit', 'Inventory of equipment and systems', 'Performance and capacity measurements', 'Written findings report', 'Prioritized recommendations'],
      fits: ['Before a refresh or office move', 'Systems that feel slow or unreliable', 'New IT managers taking stock'],
      specs: [['Output', 'Written report'], ['Commitment', 'None, the report is yours to keep']] }
  ]
};
