rsconf = {
    _id: "rs0",
    members: [
        {_id: 0, host: "45.77.162.245:27017"},
        {_id: 1, host: "45.77.162.245:27018"},
        {_id: 2, host: "45.77.162.245:27019"},
    ]
};

rs.initiate(rsconf);
rs.conf();

