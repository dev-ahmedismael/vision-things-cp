import { Box, Container } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import categories from "@/public/data/categories.json";
import { SidebarIcons } from "@/public/icons/MainIcons";
import Link from "next/link";
import { blue } from "@mui/material/colors";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useSelector } from "react-redux";

const SidebarBody = () => {
  const isActive = useSelector((state) => state.sidebar.isSidebarActive);

  // Handle sidebar accordions
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded && isActive ? panel : false);
  };
  const [subExpanded, setSubExpanded] = React.useState(false);

  const handleSubChange = (panel) => (event, isSubExpanded) => {
    setSubExpanded(isSubExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        overflowY: isActive ? "scroll" : "hidden",
        overflowX: "hidden",
      }}
      id="main_sidebar_body"
    >
      <Container>
        {categories.map((cat) => (
          <Accordion
            key={cat.id}
            sx={{ bgcolor: "white", boxShadow: 0, color: "#010e28" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{ color: "#010e28", display: !isActive && "none" }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ height: 70 }}
            >
              <Box fontSize={20}>
                {SidebarIcons.map((e) => {
                  if (e.title === cat.title) {
                    return <Box key={e.title}>{e.icon}</Box>;
                  }
                })}
              </Box>
              <Typography
                whiteSpace={"nowrap"}
                pt={"5px"}
                display={!isActive && "none"}
                pr={2}
              >
                {cat.title}
              </Typography>
            </AccordionSummary>
            {cat.content.map((e) => (
              <Link key={e.id} href={e.url}>
                <AccordionDetails sx={{ display: !isActive && "none", ml: 1 }}>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography whiteSpace={"nowrap"} color={"#010e28"}>
                      {e.title}
                    </Typography>
                    <KeyboardArrowLeftIcon sx={{ color: "#010e28" }} />
                  </Box>
                </AccordionDetails>
              </Link>
            ))}
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default SidebarBody;
