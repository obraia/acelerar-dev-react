import React from 'react';

export default function Contact({data}) {
  return (
    <article className="contact" data-testid="contact">
      <img className="contact__avatar" src={data.avatar}/>
      <span className="contact__data">{data.name}</span>
      <span className="contact__data">{data.phone}</span>
      <span className="contact__data">{data.country}</span>
      <span className="contact__data">{data.admissionDate}</span>
      <span className="contact__data">{data.company}</span>
      <span className="contact__data">{data.department}</span>
    </article>
  );
}