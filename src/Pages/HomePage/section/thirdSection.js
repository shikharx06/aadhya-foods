import React from "react";
import "../home.css";

function Card(props) {
  return (
    <div
      className="uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-2@m uk-text-center uk-margin-large-bottom uk-margin-large-top uk-margin-left"
      style={{ background: props.color }}
    >
      <div className="border">
        <h3 className="uk-card-title">{props.title}</h3>
        <p className="card-body">{props.paragraph}</p>
      </div>
    </div>
  );
}

export default function ThirdSection() {
  return (
    <div
      className="third-section uk-background-fixed"
      data-uk-scrollspy="cls: uk-animation-fade; target: .animate; delay: 200; repeat: true"
    >
      <div
        className="uk-grid  uk-flex uk-flex-center uk-flex-middle animate"
        uk-height-match
        data-uk-grid
      >
        <Card
          color="rgba(245, 49, 49, 0.5)"
          title="Stress"
          paragraph="In today’s time, almost every person is more or less suffering from stress. While medications left severe side effects in the body, black wheat has brought a ray of hope to end this terrible disease."
        />
        <Card
          color="rgba(245, 49, 49, 0.5)"
          title="Obesity"
          paragraph="Research has found very encouraging results of black wheat in controlling obesity."
        />
        <Card
          color="rgba(245, 49, 49, 0.5)"
          title="Cancer"
          paragraph="Cancer is a disease for which no permanent treatment has been available yet. At this time black wheat has emerged as a better option in the form of food supplements for all those people when no medicines are available to control this disease."
        />
        <Card
          color="rgba(245, 49, 49, 0.5)"
          title="Diabetes"
          paragraph="The most spreading disease in India as well as across the globe, while the irony is that in spite of many expensive medicines, it’s not curable. But, research has shown positive results on diabetes patients."
        />
      </div>
    </div>
  );
}
