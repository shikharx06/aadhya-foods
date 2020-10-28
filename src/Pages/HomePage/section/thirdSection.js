import React from "react";
import "../home.css";

export default function ThirdSection() {
  const state = [
    {
      title: "Stress",
      description:
        "In today’s time, almost every person is more or less suffering from stress. While medications left severe side effects in the body, black wheat has brought a ray of hope to end this terrible disease.",
    },
    {
      title: "Obesity",
      description:
        "Research has found very encouraging results of black wheat in controlling obesity.",
    },
    {
      title: "Cancer",
      description:
        "Cancer is a disease for which no permanent treatment has been available yet. At this time black wheat has emerged as a better option in the form of food supplements for all those people when no medicines are available to control this disease.",
    },
    {
      title: "Diabetes",
      description:
        "The most spreading disease in India as well as across the globe, while the irony is that in spite of many expensive medicines, it’s not curable. But, research has shown positive results on diabetes patients.",
    },
  ];

  return (
    <div
      className="third-section uk-background-fixed"
      data-uk-scrollspy="cls: uk-animation-fade; target: .animate; delay: 200; repeat: true"
    >
      <div
        className="uk-grid  uk-flex uk-flex-center uk-flex-middle animate"
        uk-height-match="target: > .uk-card > div"
        data-uk-grid
      >
        {state.map((item) => {
          return (
            <div
              className="uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-2@m uk-text-center uk-margin-large-bottom card-image uk-margin-left"
              style={{ background: "#FB938B" }}
            >
              <div className="border card-overlay">
                <h3 className="uk-card-title card-title">{item.title}</h3>
                <p className="card-body">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
