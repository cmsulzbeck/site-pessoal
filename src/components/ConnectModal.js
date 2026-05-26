import { useState } from "react";
import { Modal, Form, Dropdown } from "react-bootstrap";

const TARGET_EMAIL = "carloms.cms@gmail.com";

const COUNTRIES = [
    { code: 'BR', name: 'Brazil',               flag: '🇧🇷', dial: '+55'  },
    { code: 'US', name: 'United States',        flag: '🇺🇸', dial: '+1'   },
    { code: 'CA', name: 'Canada',               flag: '🇨🇦', dial: '+1'   },
    { code: 'MX', name: 'Mexico',               flag: '🇲🇽', dial: '+52'  },
    { code: 'AR', name: 'Argentina',            flag: '🇦🇷', dial: '+54'  },
    { code: 'CL', name: 'Chile',                flag: '🇨🇱', dial: '+56'  },
    { code: 'CO', name: 'Colombia',             flag: '🇨🇴', dial: '+57'  },
    { code: 'PE', name: 'Peru',                 flag: '🇵🇪', dial: '+51'  },
    { code: 'UY', name: 'Uruguay',              flag: '🇺🇾', dial: '+598' },
    { code: 'GB', name: 'United Kingdom',       flag: '🇬🇧', dial: '+44'  },
    { code: 'IE', name: 'Ireland',              flag: '🇮🇪', dial: '+353' },
    { code: 'FR', name: 'France',               flag: '🇫🇷', dial: '+33'  },
    { code: 'DE', name: 'Germany',              flag: '🇩🇪', dial: '+49'  },
    { code: 'IT', name: 'Italy',                flag: '🇮🇹', dial: '+39'  },
    { code: 'ES', name: 'Spain',                flag: '🇪🇸', dial: '+34'  },
    { code: 'PT', name: 'Portugal',             flag: '🇵🇹', dial: '+351' },
    { code: 'NL', name: 'Netherlands',          flag: '🇳🇱', dial: '+31'  },
    { code: 'BE', name: 'Belgium',              flag: '🇧🇪', dial: '+32'  },
    { code: 'CH', name: 'Switzerland',          flag: '🇨🇭', dial: '+41'  },
    { code: 'SE', name: 'Sweden',               flag: '🇸🇪', dial: '+46'  },
    { code: 'NO', name: 'Norway',               flag: '🇳🇴', dial: '+47'  },
    { code: 'DK', name: 'Denmark',              flag: '🇩🇰', dial: '+45'  },
    { code: 'PL', name: 'Poland',               flag: '🇵🇱', dial: '+48'  },
    { code: 'AU', name: 'Australia',            flag: '🇦🇺', dial: '+61'  },
    { code: 'NZ', name: 'New Zealand',          flag: '🇳🇿', dial: '+64'  },
    { code: 'JP', name: 'Japan',                flag: '🇯🇵', dial: '+81'  },
    { code: 'KR', name: 'South Korea',          flag: '🇰🇷', dial: '+82'  },
    { code: 'CN', name: 'China',                flag: '🇨🇳', dial: '+86'  },
    { code: 'IN', name: 'India',                flag: '🇮🇳', dial: '+91'  },
    { code: 'SG', name: 'Singapore',            flag: '🇸🇬', dial: '+65'  },
    { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪', dial: '+971' },
    { code: 'IL', name: 'Israel',               flag: '🇮🇱', dial: '+972' },
    { code: 'ZA', name: 'South Africa',         flag: '🇿🇦', dial: '+27'  },
];

export const ConnectModal = ({ show, onHide }) => {
    const initialDetails = { name: '', email: '', phone: '', message: '' };
    const [details, setDetails] = useState(initialDetails);
    const [country, setCountry] = useState(COUNTRIES[0]);

    const updateField = (key, value) => {
        setDetails(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullPhone = `${country.dial} ${details.phone}`;
        const subject = `Business opportunity - ${details.name}`;
        const body =
            `Hi Carlo! My name is ${details.name} and I'm looking for a project opportunity to work with you.\n\n` +
            `Here is a brief description of my idea: ${details.message}\n\n` +
            `This is how you can contact me: ${details.email} and ${fullPhone}`;
        window.location.href = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setDetails(initialDetails);
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} centered className="connect-modal">
            <Modal.Header closeButton>
                <Modal.Title>Send me an e-mail!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        value={details.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        required
                    />
                    <Form.Control
                        type="email"
                        placeholder="E-mail"
                        value={details.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        required
                    />
                    <div className="phone-input-group">
                        <Dropdown>
                            <Dropdown.Toggle className="country-toggle" variant="link">
                                <span className="country-flag">{country.flag}</span>
                                <span className="country-dial">{country.dial}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="country-menu">
                                {COUNTRIES.map(c => (
                                    <Dropdown.Item
                                        key={c.code}
                                        active={c.code === country.code}
                                        onClick={() => setCountry(c)}
                                    >
                                        <span className="country-flag">{c.flag}</span>
                                        <span className="country-name">{c.name}</span>
                                        <span className="country-dial">{c.dial}</span>
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control
                            type="tel"
                            placeholder="Phone"
                            value={details.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            required
                        />
                    </div>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Write your message here!"
                        value={details.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        required
                    />
                    <button type="submit" className="connect-modal-submit">Send</button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ConnectModal;
