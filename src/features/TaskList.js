import React from "react";
import { ReactSortable } from "react-sortablejs";
import { Card, Grid, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const TaskList = ({
  state1,
  setState1,
  state2,
  setState2,
  state3,
  setState3
}) => {
  return (
    <Grid container spacing={2} style={{ margin: "auto", width: "90% " }}>
      <Grid item xs={4}>
        <Typography
          variant="h6"
          style={{
            margin: "auto",
            textAlign: "center",
            padding: "10px"
          }}
        >
          <span
            style={{
              padding: "5px",
              backgroundColor: "mistyrose",
              borderRadius: "5px"
            }}
          >
            To Do
          </span>{" "}
          <span style={{ opacity: "0.5" }}>{state1.length}</span>
        </Typography>
        <ReactSortable
          list={state1}
          setList={setState1}
          group="shared"
          animation={200}
          delayOnTouchStart={true}
          delay={2}
          ghostClass="sortable-ghost"
        >
          {state1.map((item) => (
            <Card
              key={item.id}
              style={{ padding: "10px", margin: "10px 20px" }}
              draggable="true"
              className="cardContainer"
            >
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Typography variant="subtitle1">{item.name}</Typography>
                <MoreHorizIcon
                  className="moreIcon"
                  style={{
                    opacity: "0",
                    borderRadius: "5px",
                    backgroundColor: "white",
                    fontSize: "1.3rem",
                    boxShadow:
                      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 3px 0px rgba(0,0,0,0.12)"
                  }}
                />
              </Grid>
            </Card>
          ))}
        </ReactSortable>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="h6"
          style={{ margin: "auto", textAlign: "center", padding: "10px" }}
        >
          <span
            style={{
              padding: "5px",
              backgroundColor: "papayawhip",
              borderRadius: "5px"
            }}
          >
            Doing
          </span>{" "}
          <span style={{ opacity: "0.5" }}>{state2.length}</span>
        </Typography>
        <ReactSortable
          list={state2}
          setList={setState2}
          group="shared"
          animation={200}
          delayOnTouchStart={true}
          delay={2}
          ghostClass="sortable-ghost"
          dragClass="sortable-drag"
        >
          {state2.map((item) => (
            <Card
              key={item.id}
              style={{ padding: "10px", margin: "10px 20px" }}
              draggable="true"
            >
              {item.name}
            </Card>
          ))}
        </ReactSortable>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="h6"
          style={{ margin: "auto", textAlign: "center", padding: "10px" }}
        >
          <span
            style={{
              padding: "5px",
              backgroundColor: "lavender",
              borderRadius: "5px"
            }}
          >
            Done
          </span>{" "}
          <span style={{ opacity: "0.5" }}>{state3.length}</span>
        </Typography>
        <ReactSortable
          list={state3}
          setList={setState3}
          group="shared"
          animation={200}
          delayOnTouchStart={true}
          delay={2}
          ghostClass="sortable-ghost"
          dragClass="sortable-drag"
        >
          {state3.map((item) => (
            <Card
              key={item.id}
              style={{ padding: "10px", margin: "10px 20px" }}
              draggable="true"
            >
              {item.name}
            </Card>
          ))}
        </ReactSortable>
      </Grid>
    </Grid>
  );
};

export default TaskList;
