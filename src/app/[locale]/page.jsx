import { useTranslations } from "next-intl";
import { Grid } from "@mui/material";
import SectorsList from "@/shared/sector";

const sectors = [
  {
    id: 25,
    name: "Home affairs & National Security",
    rank: null,
    active: 1,
    iconName: "ic-Home affairs & National Security-act.png",
    datasetCount: 186,
  },
  {
    id: 30,
    name: "Social Justice & Empowerment",
    rank: null,
    active: 1,
    iconName: "ic-Social Justice & Empowerment-act.png",
    datasetCount: 46,
  },
  {
    id: 11,
    name: "Socio-Economic development",
    rank: null,
    active: 1,
    iconName: "ic-economy-active.png",
    datasetCount: 41,
  },
  {
    id: 12,
    name: "Defence",
    rank: null,
    active: 0,
    iconName: "ic-defence-active.png",
    datasetCount: 13,
  },
  {
    id: 4,
    name: "Health and Family Welfare",
    rank: null,
    active: 1,
    iconName: "ic-health-active.png",
    datasetCount: 179,
  },
  {
    id: 9,
    name: "Commerce and Industry",
    rank: null,
    active: 0,
    iconName: "ic-industries-active.png",
    datasetCount: 338,
  },
  {
    id: 13,
    name: "Housing and Urban Development",
    rank: null,
    active: 1,
    iconName: "ic-housing-active.png",
    datasetCount: 103,
  },
  {
    id: 6,
    name: "Energy and Power",
    rank: null,
    active: 1,
    iconName: "ic-power-active.png",
    datasetCount: 158,
  },
  {
    id: 7,
    name: "Transport and Infrastructure",
    rank: null,
    active: 0,
    iconName: "ic-transport-active.png",
    datasetCount: 121,
  },
  {
    id: 17,
    name: "Communications and Information Technology\n",
    rank: null,
    active: 1,
    iconName: "ic-communication-active.png",
    datasetCount: 3,
  },
  {
    id: 14,
    name: "Food & Public Distribution",
    rank: null,
    active: 0,
    iconName: "ic-consumer-active.png",
    datasetCount: 16,
  },
  {
    id: 2,
    name: "Finance, Banking & Insurance",
    rank: null,
    active: 1,
    iconName: "ic-finance-active.png",
    datasetCount: 744,
  },
  {
    id: 10,
    name: "Tourism",
    rank: null,
    active: 0,
    iconName: "ic-tourism-active.png",
    datasetCount: 44,
  },
  {
    id: 5,
    name: "Internal & External Affairs",
    rank: null,
    active: 1,
    iconName: "ic-internalexternal-active.png",
    datasetCount: 163,
  },
  {
    id: 15,
    name: "Water Resources Management",
    rank: null,
    active: 0,
    iconName: "ic-water-active.png",
    datasetCount: 2,
  },
  {
    id: 16,
    name: "Education and Training",
    rank: null,
    active: 0,
    iconName: "ic-education-active.png",
    datasetCount: 581,
  },
  {
    id: 8,
    name: "Science, Technology & Research",
    rank: null,
    active: 1,
    iconName: "ic-science-active.png",
    datasetCount: 83,
  },
  {
    id: 3,
    name: "Youth Affairs & Sports",
    rank: null,
    active: 0,
    iconName: "ic-Youth Affairs & Sports-active.png",
    datasetCount: 7,
  },
  {
    id: 1,
    name: "Animal Husbandary and Fishing",
    rank: null,
    active: 1,
    iconName: "ic-agriculture-active.png",
    datasetCount: 84,
  },
  {
    id: 18,
    name: "Information & Broadcasting",
    rank: null,
    active: 1,
    iconName: "ic-Information & Broadcasting-active.png",
    datasetCount: 31,
  },
  {
    id: 19,
    name: "Law & Justice",
    rank: null,
    active: 1,
    iconName: "ic-Law & Justice-active.png",
    datasetCount: 2,
  },
  {
    id: 29,
    name: "Environment & Natural Resources",
    rank: null,
    active: 1,
    iconName: "ic-Environment & Natural Resources-act.png",
    datasetCount: 100,
  },
  {
    id: 28,
    name: "Coal & Mine",
    rank: null,
    active: 1,
    iconName: "ic-Coal & Mine-act.png",
    datasetCount: 10,
  },
  {
    id: 27,
    name: "Petroleum, Oil & Natural Gas",
    rank: null,
    active: 1,
    iconName: "ic-Petroleum, Oil & Natural Gas-act.png",
    datasetCount: 64,
  },
  {
    id: 26,
    name: "Governance & Administration",
    rank: null,
    active: 1,
    iconName: "ic-Governance & Administration-act.png",
    datasetCount: 65,
  },
  {
    id: 22,
    name: "Agriculture and Cooperation",
    rank: null,
    active: 1,
    iconName: "ic-Agriculture and Cooperation-act.png",
    datasetCount: 226,
  },
  {
    id: 23,
    name: "Rural Development & Panchayati Raj",
    rank: null,
    active: 1,
    iconName: "ic-Rural Development & Panchayati Raj-act.png",
    datasetCount: 30,
  },
  {
    id: 24,
    name: "Employment & Labour",
    rank: null,
    active: 1,
    iconName: "ic-Employment & Labour-act.png",
    datasetCount: 135,
  },
  {
    id: 35,
    name: "Sustainable Development Goals",
    rank: null,
    active: 1,
    iconName: null,
    datasetCount: 17,
  }
];

export default function Index() {
  const t = useTranslations();

  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid item xs={10}>
          <SectorsList data={sectors} />
        </Grid>
      </Grid>
    </>
  );
}
