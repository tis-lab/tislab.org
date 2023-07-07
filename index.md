---
title: Home
---

# Trans<wbr>lational and Inte<wbr>grative Sciences Lab

{% include section.html full=true %}

<style>
  iframe {
    width: 100%;
    height: min(400px, 50vw);
    border: none;
  }
</style>
  
<iframe src="map"></iframe>

{% include section.html %}

{% capture text %}
Translational science breaks down traditional silos between discreet disciplines of science empowering innovation.
On the front lines of this emerging field, TISLab applies these varied disciplines to the study of the data encoded on phenotypes to unlock new understanding and amplify discovery in areas such as rare disease diagnosis in both plants and humans, accelerated cancer research, coping with climate change, and current pressing issues like COVID-19 and other viral threats.
{% endcapture %}

{%
  include feature.html
  image="images/research/translational-science.png"
  link="team"
  title="What is Translational Science?"
  text=text
%}

{% capture text %}
TISLab is unique in that it focuses on unifying data across sources, disciplines and forms to make them informative for new kinds of translational questions.
It brings together people and their data across extremely diverse disciplinary divides, leading advances in science that aim to:

- Cope with Climate Change
- Facilitate knowledge discovery for Covid-19
- Improve Rare Disease Diagnosis and Treatment
- Accelerate Cancer Research
- Promote Healthy Lifestyles

This means that the research done in TISLab depends upon partnership and collaboration across multiple disciplines.

{% include link.html link="research" text="Learn More" style="button" %}
{:.center}
{% endcapture %}

{%
  include feature.html
  image="images/research/research.png"
  link="research"
  title="Our Research"
  text=text
  flip=true
%}
