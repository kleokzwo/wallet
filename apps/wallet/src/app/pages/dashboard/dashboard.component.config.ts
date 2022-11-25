import { Injectable } from "@angular/core";

@Injectable()
export class DashboardComponentConfig {

    public config = {
        user: {
            "hash160": "660d4ef3a743e3e696ad990364e555c271ad504b",
            "address": "1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F",
            "n_tx": 17,
            "n_unredeemed": 2,
            "total_received": 1031350000,
            "total_sent": 931250000,
            "final_balance": 100100000,
            "txs": [
                {
                    "hash": "b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da",
                    "ver": 1,
                    "vin_sz": 1,
                    "vout_sz": 2,
                    "lock_time": "Unavailable",
                    "size": 258,
                    "relayed_by": "64.179.201.80",
                    "block_height": 12200,
                    "tx_index": "12563028",
                    "inputs": [
                        {
                            "prev_out": {
                            "hash": "a3e2bcc9a5f776112497a32b05f4b9e5b2405ed9",
                            "value": "100000000",
                            "tx_index": "12554260",
                            "n": "2"
                            },
                            "script": "76a914641ad5051edd97029a003fe9efb29359fcee409d88ac"
                        }
                    ],
                    "out": [
                        {
                            "value": "98000000",
                            "hash": "29d6a3540acfa0a950bef2bfdc75cd51c24390fd",
                            "script": "76a914641ad5051edd97029a003fe9efb29359fcee409d88ac"
                        },
                        {
                            "value": "2000000",
                            "hash": "17b5038a413f5c5ee288caa64cfab35a0c01914e",
                            "script": "76a914641ad5051edd97029a003fe9efb29359fcee409d88ac"
                        }
                    ]
                }
            ]
        },

        
    }
}