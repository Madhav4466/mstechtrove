import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import '../../../../styles/apps/calculators/age-calculator.css';

export default function AgeCalculator() {
    const[selectedDate, setSelectedDate] = useState('');
    const[ageData, setAgeData] = useState(null);
    const[nextBirthday, setNextBirthday] = useState(null);
    const [error, setError] = useState('');
    const [validated, setValidated] = useState(false);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    }

    const calculateAge = () => {
        if(!selectedDate){return};

        const birthDate = new Date(selectedDate);
        const currentDate = new Date();

        birthDate.setHours(0, 0, 0, 0);

        if (birthDate > currentDate) {
            setError('The selected date cannot be in the future.');
            setAgeData(null);
            return;
          }
      
          setError('');

        const diffInMilliseconds = currentDate - birthDate;
        const totalSeconds = Math.floor(diffInMilliseconds / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        let years = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();
        let days = currentDate.getDate() - birthDate.getDate();

        if (months < 0) {
            years--;
            months += 12;
        }
        if (days < 0) {
            months--;
            const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
            days += prevMonth.getDate();
        }

        setAgeData({ years, months, days, hours: totalHours, minutes: totalMinutes, seconds: totalSeconds });
        calculateNextBirthday(birthDate, currentDate);
    };

    const calculateNextBirthday = (birthDate, currentDate) => {
        if(!selectedDate){return};

        const nextBirthday = new Date(birthDate);
        nextBirthday.setFullYear(currentDate.getFullYear());

        if(nextBirthday <= currentDate) {
            nextBirthday.setFullYear(currentDate.getFullYear() + 1);
        }

        const timeDiff = nextBirthday - currentDate;
        const nextBirthdayDays = Math.floor(timeDiff / (1000 * 3600 * 24));
        const nextBirthdayMonths = Math.floor(nextBirthdayDays / 30);
        const nextBirthdayRemainingDays = nextBirthdayDays % 30;
        const weekday = nextBirthday.toLocaleString('en-US', { weekday: 'long' });

        setNextBirthday({
            months: nextBirthdayMonths,
            days: nextBirthdayRemainingDays,
            weekDay: weekday
          });
    }

    useEffect(() => {
        if (!selectedDate) return;
        calculateAge();

        const interval = setInterval(() => {
            calculateAge();
        }, 1000);

        return () => clearInterval(interval);
    }, [selectedDate]);

    const renderResult = () => {
        return(
            <>
                { ageData &&
                    <Col lg={4} id="result-container">
                        <Container className={"card-elevated result d-flex flex-column gap-3"}>
                            <Row className="age-summary">
                                <Col lg={12} className="col-lg-12 d-flex flex-column gap-3 p-3">
                                    <Row className="mt-3">
                                        <Col>Your Age is:</Col>
                                    </Row>
                                    <Row className="justify-content-around">
                                        <Col lg={2} sm={2} xs={2} className="summary-box">
                                            <Col lg={12}>{ageData.years}</Col>
                                            <Col lg={12}>Years</Col>
                                        </Col>
                                        <Col lg={2} sm={2} xs={2} className="summary-box">
                                            <Col lg={12}>{ageData.months}</Col>
                                            <Col lg={12}>Months</Col>
                                        </Col>
                                        <Col lg={2} sm={2} xs={2} className="summary-box">
                                            <Col lg={12}>{ageData.days}</Col>
                                            <Col lg={12}>Days</Col>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="small">From DOB: {selectedDate}</Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="age-details">
                                <Col lg={12} className="p-3">
                                    {
                                        Object.keys(ageData).map((data) =>{
                                            return (
                                                <Row key={data} className="px-2">
                                                    <Col className="text-start">{data.charAt(0).toUpperCase() + data.slice(1)}</Col>
                                                    <Col className="text-end">{ageData[data]}</Col>
                                                </Row>
                                            );
                                        })
                                    }
                                </Col>
                            </Row>
                        </Container>
                        <Container className={"card-elevated result d-flex flex-column gap-3 mt-3"}>
                            {nextBirthday &&
                                <Row className="next-birthday">
                                    <Col lg={12} className="p-3">
                                        <Row className="px-2">
                                            <Col className="text-start h6">Next Birthday</Col>
                                        </Row>
                                        <Row className="px-2">
                                            {
                                                Object.keys(nextBirthday).map((data) => {
                                                    if(data !== "weekDay"){
                                                        return(
                                                            <Col key={data} lg={2} sm={2} xs={2}>
                                                                <Col lg={12}>{nextBirthday[data]}</Col>
                                                                <Col lg={12}>{data.charAt(0).toUpperCase() + data.slice(1)}</Col>
                                                            </Col>
                                                        );
                                                    }
                                                })
                                            }
                                            <Col>
                                                <Col>The Birthday is on <b>{nextBirthday.weekDay}</b> this year</Col>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            }
                        </Container>
                        <Container className={"d-flex flex-column gap-3 mt-3"}>
                            <Row className="recalculate">
                                <Col lg={12} className="text-start">
                                    <Button onClick={calculateAge}>Recalculate</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                }
            </>
        );
    }
      
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return(
        <Row className='justify-content-center flex-column align-items-center gap-3'>
            <Col lg={6} id="calc-container">
                <Container className="age-calculator p-0">
                    <Form className='p-4 text-bg-dark rounded' noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group as={Col} lg={12} className="justify-content-center text-start d-flex" controlId="dob">
                                <Form.Label column lg={3}>Date of Birth *</Form.Label>
                                <Col lg={5}>
                                    <Form.Control type="date" 
                                        placeholder="name@example.com" 
                                        value={selectedDate} 
                                        onChange={handleDateChange} 
                                        required 
                                        defaultValue={''} 
                                        max={new Date().toISOString().split('T')[0]} 
                                    />
                                    <Form.Control.Feedback type="invalid">{error ? error : "Please provide your Date of Birth"}</Form.Control.Feedback>
                                </Col>
                                <Col lg={4} className="text-center">
                                    <Button type="submit" variant="light" onClick={calculateAge}>Calculate</Button>
                                </Col>
                            </Form.Group>
                        </Row>
                    </Form>
                </Container>
            </Col>
            {ageData ? renderResult() : ""}
        </Row>
    );
}